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

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
}


def handler(event: dict, context) -> dict:
    '''
    Принимает анонимные сообщения о преступлениях и заявки в агенты с сайта ЧРК «Каскад».
    Отправляет содержимое на защищённую почту. Не сохраняет IP и метаданные отправителя.
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

    msg_type = body.get('type', 'report')

    if msg_type == 'agent':
        subject = '[КАСКАД] Новая заявка в агенты'
        lines = [
            'НОВАЯ ЗАЯВКА В АГЕНТЫ',
            '',
            f"Псевдоним / позывной: {body.get('alias', '—')}",
            f"Способ связи: {body.get('contact', '—')}",
            f"Навыки / доступы / регион: {body.get('skills', '—')}",
            '',
            'Мотивация:',
            body.get('motivation', '—'),
        ]
    else:
        subject = '[КАСКАД] Анонимное сообщение'
        lines = [
            'АНОНИМНОЕ СООБЩЕНИЕ О ПРЕСТУПЛЕНИИ / ТЕРРОРИЗМЕ',
            '',
            f"Категория: {body.get('category', '—')}",
            f"Регион / страна: {body.get('region', '—')}",
            '',
            'Сообщение:',
            body.get('message', '—'),
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
