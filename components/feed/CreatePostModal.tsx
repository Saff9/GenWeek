"use client";
import { useState } from "react";
import Button from "../ui/Button";

export default function CreatePostModal() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    setContent("");
    setOpen(false);
  };

  return (
    <>
      <Button variant="secondary" full onClick={() => setOpen(true)}>
        + Create Post
      </Button>

      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-80 shadow-lg space-y-3">
            <h2 className="text-lg font-semibold text-primary">
              Share something new
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                className="border p-2 rounded w-full"
                rows={3}
              />
              <div className="flex gap-2">
                <Button type="submit" variant="primary" full>
                  Post
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  full
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
