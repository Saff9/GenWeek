import React from 'react';
import PostFeed from './components/PostFeed';
import StoriesBar from './components/StoriesBar';
import QuickActions from './components/QuickActions';

export default function HomePage() {
  return (
    <div className="page-grid">
      <aside className="left"><StoriesBar /></aside>
      <section className="center">
        <QuickActions />
        <PostFeed />
      </section>
      <aside className="right">
        <div className="card">Right column (ads / suggestions)</div>
      </aside>
    </div>
  );
}
