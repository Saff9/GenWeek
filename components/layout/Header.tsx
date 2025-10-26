"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-primary text-white">
      <Link href="/" className="font-bold text-lg">
        GenWeek
      </Link>
      <nav className="space-x-4 text-sm">
        <Link href="/feed">Feed</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
