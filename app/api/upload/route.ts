import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // This demo simply accepts the upload and echos metadata.
  const contentType = req.headers.get('content-type') || '';
  return NextResponse.json({ ok: true, contentType });
}
