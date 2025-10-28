'use client';
import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';

const initialPosts = [
  { id: '1', author: 'Ava', text: 'First post! Loving genz-day ✨', createdAt: new Date().toISOString() },
  { id: '2', author: 'Liam', text: 'Trying out the new feed.', createdAt: new Date().toISOString() },
];

export default function PostFeed() {
  const [posts, setPosts] = useState(initialPosts);
  const [open, setOpen] = useState(false);

  function addPost(text) {
    const newPost = {
      id: String(Date.now()),
      author: 'You',
      text,
      createdAt: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
    setOpen(false);
  }

  return (
    <div>
      <button className="card" onClick={() => setOpen(true)}>Create post</button>
      <CreatePostModal open={open} onClose={() => setOpen(false)} onCreate={addPost} />

      <div style={{ marginTop: 12 }}>
        {posts.map((p) => (
          <article key={p.id} className="post">
            <div className="meta">
              {p.author} • {new Date(p.createdAt).toLocaleString()}
            </div>
            <div>{p.text}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
