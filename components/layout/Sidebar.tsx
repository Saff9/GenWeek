"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 bg-primary text-white px-3 py-2 rounded-lg"
      >
        ☰
      </button>
      {open && (
        <aside className="fixed top-0 left-0 h-full w-56 bg-white shadow-lg p-4 z-50 space-y-4">
          <h1 className="text-xl font-bold text-primary">Menu</h1>
          <Link href="/feed" onClick={() => setOpen(false)}>
            Feed
          </Link>
          <Link href="/feed/story" onClick={() => setOpen(false)}>
            Stories
          </Link>
          <Link href="/feed/upload" onClick={() => setOpen(false)}>
            Upload
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </aside>
      )}
    </>
  );
}
