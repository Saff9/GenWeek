import Link from "next/link";

export default function FeedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-accent flex flex-col">
      <header className="bg-primary text-white p-4 text-center font-semibold">
        GenWeek Feed
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-primary text-white p-3 flex justify-around">
        <Link href="/feed">Feed</Link>
        <Link href="/feed/story">Stories</Link>
        <Link href="/feed/upload">Upload</Link>
      </footer>
    </div>
  );
}
