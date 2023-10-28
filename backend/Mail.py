import smtplib
from email.mime.text import MIMEText

def send_mail(content, to):
    message = MIMEText(content)
    message['Subject'] = "Test email"
    message['From'] = "rupalitasnimsamad@gmail.com"
    message['To'] = to 

    # Send message
    with smtplib.SMTP('smtp-mail.outlook.com', 587) as smtp:
        smtp.starttls()
        smtp.login('rupalitasnimsamad@gmail.com', 'goawaykid789')
        smtp.send_message(message)
        