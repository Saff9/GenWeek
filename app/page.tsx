import React from 'react';
import PostFeed from './components/PostFeed';
import StoriesBar from './components/StoriesBar';
import QuickActions from './components/QuickActions';

export default async function HomePage() {
  // In a real app we'd fetch session + posts from server
  return (
    <div className="page-grid">
      <aside className="left"> <StoriesBar /> </aside>
      <section className="center">
        <QuickActions />
        <PostFeed />
      </section>
      <aside className="right"> <div className="card">Right column (ads / suggestions)</div> </aside>
    </div>
  );
}
