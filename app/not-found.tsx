import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-2">404 — Page Not Found</h1>
      <p className="text-gray-700 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition"
      >
        Back Home
      </Link>
    </div>
  );
}
