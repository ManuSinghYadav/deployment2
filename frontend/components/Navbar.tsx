"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  Show,
} from "@clerk/nextjs";
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

        <Show when="signed-out">
          <SignInButton mode="redirect">
            <button className="nav-link">Sign In</button>
          </SignInButton>

          <SignUpButton mode="redirect">
            <button className="nav-signup">Sign Up</button>
          </SignUpButton>
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </nav>
    </header>
  );
}