"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.trim()) return;

    console.log("Message:", message);

    setMessage("");
  };

  return (
    <main className="chat-page">
      <div className="chat-background" />

      <section className="chat-container">
        <div className="chat-header">
          <div className="status-dot" />
          <span>LLM Lab</span>
        </div>

        <div className="chat-content">
          <div className="welcome-message">
            <div className="welcome-icon">✦</div>

            <h1>What are you curious about?</h1>

            <p>
              Ask something, explore an idea, or throw a difficult problem
              at the model.
            </p>
          </div>
        </div>

        <form className="chat-input-wrapper" onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message the model..."
            rows={1}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                event.currentTarget.form?.requestSubmit();
              }
            }}
          />

          <div className="input-footer">
            <span className="input-hint">
              Enter to send · Shift + Enter for newline
            </span>

            <button
              type="submit"
              className="send-button"
              disabled={!message.trim()}
              aria-label="Send message"
            >
              ↑
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}