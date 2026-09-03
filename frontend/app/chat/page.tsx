"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const query = message.trim();

    if (!query || loading) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch(`${API_URL}/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
      
        console.error("Backend error:", {
          status: res.status,
          statusText: res.statusText,
          body: errorText,
        });
      
        throw new Error(
          `Request failed: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();

      setResponse(data);
      setMessage("");
    } catch (error) {
      console.error("Chat request failed:", error);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="chat-page">
      <div className="chat-background" />

      <section className="chat-container">
        <div className="chat-content">
          {!response && !loading ? (
            <div className="welcome-message">
              <div className="welcome-icon">✦</div>

              <h1>What are you curious about?</h1>

              <p>
                Ask something, explore an idea, or throw a difficult
                problem at the model.
              </p>
            </div>
          ) : (
            <div className="response-container">
              <div className="user-message">
                {message}
              </div>

              {loading ? (
                <div className="loading">Thinking...</div>
              ) : (
                <div className="assistant-message">
                  {response}
                </div>
              )}
            </div>
          )}
        </div>

        <form
          className="chat-input-wrapper"
          onSubmit={handleSubmit}
        >
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message the model..."
            rows={1}
            disabled={loading}
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
              disabled={!message.trim() || loading}
              aria-label="Send message"
            >
              {loading ? "..." : "↑"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}