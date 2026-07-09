import json
import os
import smtplib
import hashlib
import hmac
from email.mime.text import MIMEText
from email.header import Header
from datetime import datetime, timezone, timedelta

import psycopg2

SMTP_HOST = 'smtp.yandex.ru'
SMTP_PORT = 465
SMTP_USER = 'security-davydov@yandex.ru'

MAX_FIELD_LEN = 8000
MAX_SHORT_LEN = 300
MIN_FILL_SECONDS = 3

RATE_WINDOW_MINUTES = 10
RATE_MAX_REQUESTS = 5

ALLOWED_ORIGIN_SUFFIXES = (
    'cascade-pic.ru',
    'poehali.dev',
    'poehali.app',
)

SECURITY_HEADERS = {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'no-referrer',
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json',
}


def _cors(origin: str) -> dict:
    allow = '*'
    if origin:
        host = origin.split('//')[-1].split('/')[0].split(':')[0].lower()
        if any(host == s or host.endswith('.' + s) for s in ALLOWED_ORIGIN_SUFFIXES):
            allow = origin
    return {
        'Access-Control-Allow-Origin': allow,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin',
    }


def _resp(status: int, body: dict, origin: str) -> dict:
    return {
        'statusCode': status,
        'headers': {**_cors(origin), **SECURITY_HEADERS},
        'body': json.dumps(body),
    }


def _clean(value, limit=MAX_FIELD_LEN):
    if not isinstance(value, str):
        return ''
    cleaned = value.replace('\x00', '').strip()
    return cleaned[:limit]


def _clean_header(value, limit=MAX_SHORT_LEN):
    # Защита от email header injection: убираем переводы строк
    cleaned = _clean(value, limit)
    return cleaned.replace('\r', ' ').replace('\n', ' ')


def _hash_ip(ip: str) -> str:
    salt = os.environ.get('YANDEX_SMTP_PASSWORD', 'static-salt')
    return hmac.new(salt.encode(), ip.encode(), hashlib.sha256).hexdigest()


def _rate_limited(ip_hash: str) -> bool:
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return False
    try:
        conn = psycopg2.connect(dsn)
        conn.autocommit = True
        cur = conn.cursor()
        cutoff = datetime.now(timezone.utc) - timedelta(minutes=RATE_WINDOW_MINUTES)
        cur.execute(
            "DELETE FROM form_rate_limit WHERE created_at < %s",
            (datetime.now(timezone.utc) - timedelta(hours=1),),
        )
        cur.execute(
            "SELECT COUNT(*) FROM form_rate_limit WHERE ip_hash = %s AND created_at >= %s",
            (ip_hash, cutoff),
        )
        count = cur.fetchone()[0]
        if count >= RATE_MAX_REQUESTS:
            cur.close()
            conn.close()
            return True
        cur.execute(
            "INSERT INTO form_rate_limit (ip_hash) VALUES (%s)",
            (ip_hash,),
        )
        cur.close()
        conn.close()
        return False
    except Exception:
        return False


def handler(event: dict, context) -> dict:
    '''
    Принимает анонимные сообщения о преступлениях и заявки в агенты с сайта ЧРК «Каскад».
    Отправляет содержимое на защищённую почту (адрес получателя хранится в секрете).
    Не сохраняет IP и метаданные отправителя — только необратимый хеш для антиспам-лимита.
    Защита: honeypot-поле, минимальное время заполнения, rate-limiting, строгий CORS,
    защита от email header injection, security-заголовки.
    '''
    method = event.get('httpMethod', 'GET')
    headers = event.get('headers') or {}
    origin = headers.get('origin') or headers.get('Origin') or ''

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**_cors(origin), **SECURITY_HEADERS}, 'body': ''}

    if method != 'POST':
        return _resp(405, {'error': 'Method not allowed'}, origin)

    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return _resp(400, {'error': 'Invalid JSON'}, origin)

    if not isinstance(body, dict):
        return _resp(400, {'error': 'Invalid payload'}, origin)

    # Honeypot — молча возвращаем успех ботам
    honeypot = body.get('website') or body.get('company') or ''
    if isinstance(honeypot, str) and honeypot.strip():
        return _resp(200, {'success': True}, origin)

    # Слишком быстрое заполнение — бот
    elapsed = body.get('elapsed')
    if isinstance(elapsed, (int, float)) and elapsed < MIN_FILL_SECONDS:
        return _resp(200, {'success': True}, origin)

    # Rate-limiting по необратимому хешу IP
    identity = (event.get('requestContext') or {}).get('identity') or {}
    source_ip = identity.get('sourceIp') or 'unknown'
    ip_hash = _hash_ip(source_ip)
    if _rate_limited(ip_hash):
        return _resp(429, {'error': 'Too many requests'}, origin)

    msg_type = body.get('type', 'report')

    if msg_type == 'agent':
        alias = _clean_header(body.get('alias'), MAX_SHORT_LEN)
        contact = _clean_header(body.get('contact'), MAX_SHORT_LEN)
        skills = _clean(body.get('skills'), MAX_FIELD_LEN)
        motivation = _clean(body.get('motivation'), MAX_FIELD_LEN)

        if len(alias) < 2:
            return _resp(400, {'error': 'Validation failed'}, origin)

        subject = '[КАСКАД] Новая заявка в агенты'
        lines = [
            'НОВАЯ ЗАЯВКА В АГЕНТЫ',
            '',
            f"Псевдоним / позывной: {alias or '—'}",
            f"Способ связи: {contact or '—'}",
            f"Навыки / доступы / регион: {skills or '—'}",
            '',
            'Мотивация:',
            motivation or '—',
        ]
    else:
        category = _clean_header(body.get('category'), MAX_SHORT_LEN)
        region = _clean_header(body.get('region'), MAX_SHORT_LEN)
        message_text = _clean(body.get('message'), MAX_FIELD_LEN)

        if len(message_text) < 10:
            return _resp(400, {'error': 'Validation failed'}, origin)

        subject = '[КАСКАД] Анонимное сообщение'
        lines = [
            'АНОНИМНОЕ СООБЩЕНИЕ О ПРЕСТУПЛЕНИИ / ТЕРРОРИЗМЕ',
            '',
            f"Категория: {category or '—'}",
            f"Регион / страна: {region or '—'}",
            '',
            'Сообщение:',
            message_text or '—',
        ]

    lines.append('')
    lines.append('—')
    lines.append(f"Получено: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    lines.append('IP отправителя не сохраняется. Источник анонимен.')

    text_body = '\n'.join(lines)

    smtp_password = os.environ.get('YANDEX_SMTP_PASSWORD')
    if not smtp_password:
        return _resp(500, {'error': 'SMTP not configured'}, origin)

    recipient = os.environ.get('FORM_RECIPIENT_EMAIL', SMTP_USER)

    message = MIMEText(text_body, 'plain', 'utf-8')
    message['Subject'] = Header(subject, 'utf-8')
    message['From'] = SMTP_USER
    message['To'] = recipient

    try:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, timeout=20) as server:
            server.login(SMTP_USER, smtp_password)
            server.sendmail(SMTP_USER, [recipient], message.as_string())
    except Exception:
        return _resp(502, {'error': 'Delivery failed'}, origin)

    return _resp(200, {'success': True}, origin)
