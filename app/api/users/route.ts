import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

// Fetch all users
export async function GET() {
  const users = await prisma.user.findMany({ select: { id: true, email: true, name: true } });
  return NextResponse.json(users);
}

// Create new user
export async function POST(req: Request) {
  const body = await req.json();
  const hashed = await bcrypt.hash(body.password, 10);
  const user = await prisma.user.create({
    data: { name: body.name, email: body.email, password: hashed },
  });
  return NextResponse.json(user);
}
