import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory store for demo purposes
let POSTS: any[] = [
  { id: '1', author: 'Ava', text: 'Hello world from server!', createdAt: new Date().toISOString() }
];

export async function GET(req: NextRequest) {
  return NextResponse.json({ items: POSTS });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const item = { id: String(Date.now()), author: body.author ?? 'Anon', text: body.text ?? '', createdAt: new Date().toISOString() };
  POSTS.unshift(item);
  return NextResponse.json(item, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
  POSTS = POSTS.filter(p => p.id !== id);
  return NextResponse.json({ success: true });
}
