import psycopg2

from config.settings import settings


conn = psycopg2.connect(settings.db_url)

cursor = conn.cursor()

def create_database():
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS chat (
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(20),
            session_id VARCHAR(20),
            role VARCHAR(20),
            message TEXT
        )
    ''')
    conn.commit()

def insert_chat(user_id, session_id, role, message):
    cursor.execute("INSERT INTO chat (user_id, session_id, role, message) VALUES (%s, %s, %s, %s)", (user_id, session_id, role, message))
    conn.commit()

def show_chat(user_id, session_id):
    cursor.execute("SELECT * FROM chat WHERE user_id=%s AND session_id=%s", (user_id, session_id))
    return cursor.fetchall() 

def close_connection():
    conn.close()