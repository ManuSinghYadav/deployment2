"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();

  const isChatPage = pathname === "/chat";

  return (
    <header className="navbar">
      <Logo />

      <nav className="nav-actions">
        {isChatPage ? (
          <Link href="/" className="nav-link">
            ← Home
          </Link>
        ) : (
          <Link href="/chat" className="nav-link">
            Chat →
          </Link>
        )}
      </nav>
    </header>
  );
}