"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  const active = (path: string) =>
    pathname === path ? "text-secondary" : "text-white/70";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary flex justify-around py-3 text-sm font-medium">
      <Link href="/feed" className={active("/feed")}>
        Feed
      </Link>
      <Link href="/feed/story" className={active("/feed/story")}>
        Stories
      </Link>
      <Link href="/feed/upload" className={active("/feed/upload")}>
        Upload
      </Link>
    </nav>
  );
}
