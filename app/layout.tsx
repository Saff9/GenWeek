import './globals.css';
import React from 'react';

export const metadata = {
  title: 'genz-day',
  description: 'A lightweight social feed demo built with Next.js (app router).',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="app-shell">
          <header className="topbar">
            <h1>genz-day</h1>
          </header>
          <main className="container">{children}</main>
        </div>
      </body>
    </html>
  );
}
