import os 

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI

from config.settings import settings


os.environ["OPENAI_API_KEY"] = settings.openai_api_key

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows any frontend to connect (or http://localhost:3000)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from pydantic import BaseModel


class QueryRequest(BaseModel):
    query: str


@app.post("/query")
def chat(request: QueryRequest) -> str:
    openai = OpenAI()

    response = openai.chat.completions.create(
        model="gpt-4.1-nano",
        messages=[
            {
                "role": "user",
                "content": request.query,
            }
        ],
    )

    return response.choices[0].message.content or ""
