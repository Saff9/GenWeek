"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-accent text-red-600">
      <h1 className="text-2xl font-bold mb-2">Something went wrong 😢</h1>
      <p className="text-gray-800 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
      >
        Try again
      </button>
    </div>
  );
}
