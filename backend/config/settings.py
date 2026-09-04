import os
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    openai_api_key: str
    model_name: str = "gpt-4o-mini"
    db_url: str
    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
        )

settings = Settings()

os.environ["OPENAI_API_KEY"] = settings.openai_api_key
