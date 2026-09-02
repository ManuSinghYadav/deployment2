import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="brand">
      <div className="brand-icon">✦</div>

      <div className="brand-name">
        LLM<span>Lab</span>
      </div>
    </Link>
  );
}   