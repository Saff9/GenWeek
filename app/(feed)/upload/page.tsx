"use client";
import { useState } from "react";

export default function UploadPage() {
  const [content, setContent] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    if (res.ok) setUploaded(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Create Post</h1>
      {!uploaded ? (
        <form onSubmit={submitPost} className="flex flex-col gap-3">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write something..."
            className="border p-3 rounded"
            required
          />
          <button className="bg-primary text-white py-2 rounded hover:bg-secondary">
            Post Now
          </button>
        </form>
      ) : (
        <p className="text-secondary text-center">Post uploaded! 🎉</p>
      )}
    </div>
  );
}
