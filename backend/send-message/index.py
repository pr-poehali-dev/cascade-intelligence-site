import json
import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header
from datetime import datetime, timezone

SMTP_HOST = 'smtp.yandex.ru'
SMTP_PORT = 465
SMTP_USER = 'security-davydov@yandex.ru'
RECIPIENT = 'security-davydov@yandex.ru'

MAX_FIELD_LEN = 8000
MAX_SHORT_LEN = 300
MIN_FILL_SECONDS = 3

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
}


def _clean(value, limit=MAX_FIELD_LEN):
    if not isinstance(value, str):
        return ''
    return value.strip()[:limit]


def handler(event: dict, context) -> dict:
    '''
    Принимает анонимные сообщения о преступлениях и заявки в агенты с сайта ЧРК «Каскад».
    Отправляет содержимое на защищённую почту. Не сохраняет IP и метаданные отправителя.
    Защита от спам-ботов: honeypot-поле и минимальное время заполнения формы.
    '''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Invalid JSON'}),
        }

    if not isinstance(body, dict):
        return {
            'statusCode': 400,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Invalid payload'}),
        }

    honeypot = body.get('website') or body.get('company') or ''
    if isinstance(honeypot, str) and honeypot.strip():
        return {
            'statusCode': 200,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'success': True}),
        }

    elapsed = body.get('elapsed')
    if isinstance(elapsed, (int, float)) and elapsed < MIN_FILL_SECONDS:
        return {
            'statusCode': 200,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'success': True}),
        }

    msg_type = body.get('type', 'report')

    if msg_type == 'agent':
        alias = _clean(body.get('alias'), MAX_SHORT_LEN)
        contact = _clean(body.get('contact'), MAX_SHORT_LEN)
        skills = _clean(body.get('skills'), MAX_FIELD_LEN)
        motivation = _clean(body.get('motivation'), MAX_FIELD_LEN)

        if len(alias) < 2:
            return {
                'statusCode': 400,
                'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Validation failed'}),
            }

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
        category = _clean(body.get('category'), MAX_SHORT_LEN)
        region = _clean(body.get('region'), MAX_SHORT_LEN)
        message_text = _clean(body.get('message'), MAX_FIELD_LEN)

        if len(message_text) < 10:
            return {
                'statusCode': 400,
                'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Validation failed'}),
            }

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
        return {
            'statusCode': 500,
            'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'SMTP not configured'}),
        }

    message = MIMEText(text_body, 'plain', 'utf-8')
    message['Subject'] = Header(subject, 'utf-8')
    message['From'] = SMTP_USER
    message['To'] = RECIPIENT

    with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, timeout=20) as server:
        server.login(SMTP_USER, smtp_password)
        server.sendmail(SMTP_USER, [RECIPIENT], message.as_string())

    return {
        'statusCode': 200,
        'headers': {**CORS_HEADERS, 'Content-Type': 'application/json'},
        'body': json.dumps({'success': True}),
    }
