'use client';

import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';

type Post = {
  id: string;
  author: string;
  text: string;
  createdAt: string;
};

const initial: Post[] = [
  { id: '1', author: 'Ava', text: 'First post! loving genz-day ✨', createdAt: new Date().toISOString() },
  { id: '2', author: 'Liam', text: 'Trying out the new feed.', createdAt: new Date().toISOString() },
];

export default function PostFeed() {
  const [posts, setPosts] = useState<Post[]>(initial);
  const [open, setOpen] = useState(false);

  function addPost(text: string) {
    const p: Post = { id: String(Date.now()), author: 'You', text, createdAt: new Date().toISOString() };
    setPosts([p, ...posts]);
    setOpen(false);
  }

  return (
    <div>
      <button className="card" onClick={() => setOpen(true)}>Create post</button>
      <CreatePostModal open={open} onClose={() => setOpen(false)} onCreate={addPost} />

      <div style={{marginTop:12}}>
        {posts.map((p) => (
          <article key={p.id} className="post">
            <div className="meta">{p.author} • {new Date(p.createdAt).toLocaleString()}</div>
            <div>{p.text}</div>
          </article>
        ))}
      </div>
    </div>
  );
        }
