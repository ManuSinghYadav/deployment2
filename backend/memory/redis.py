from openai import OpenAI

from config.settings import settings
from memory.postgres import create_database, close_connection, insert_chat, show_chat

openai = OpenAI()


def chat(prompt):
    messages = [{"role": "user", "content": prompt}]

    response = openai.chat.completions.create(
        model="gpt-4.1-nano",
        messages=messages
    )
    # return(response.choices[0].message.content)
    return response

print(chat("hello"))