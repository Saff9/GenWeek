import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({ include: { user: true } });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const data = await req.json();
  const post = await prisma.post.create({
    data: { content: data.content, userId: "temp-user-id" }, // Replace later with actual session user ID
  });
  return NextResponse.json(post);
}
