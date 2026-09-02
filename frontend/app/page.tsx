import Link from "next/link";

export default function Home() {
  return (
    <main className="landing-page">
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <section className="hero">
        <div className="badge">LLM Playground</div>

        <h1>
          Welcome to the
          <span> LLM Lab.</span>
        </h1>

        <p>
          A hands-on playground for building and understanding modern
          AI applications. From LLMs and Redis to AWS deployment,
          everything is built from the ground up.
        </p>

        <Link href="/chat" className="cta">
          Enter the Lab →
        </Link>
      </section>
    </main>
  );
}