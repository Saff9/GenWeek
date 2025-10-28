'use client';
import React, { useState } from 'react';

export default function CreatePostModal({ open, onClose, onCreate }:
  { open: boolean; onClose: () => void; onCreate: (text: string) => void }) {
  const [text, setText] = useState('');
  if (!open) return null;
  return (
    <div style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{width:520}} className="card">
        <h3>Create a post</h3>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} style={{width:'100%',padding:8,borderRadius:8}} />
        <div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:8}}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => { if (text.trim()) onCreate(text.trim()); }}>Post</button>
        </div>
      </div>
    </div>
  );
}
