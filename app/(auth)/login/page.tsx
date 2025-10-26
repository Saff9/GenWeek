"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn("credentials", {
          email,
          password,
          callbackUrl: "/feed",
        });
      }}
      className="flex flex-col gap-3"
    >
      <h1 className="text-2xl font-semibold text-primary text-center mb-2">
        Login to GenWeek
      </h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded text-gray-800"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded text-gray-800"
      />
      <button className="bg-primary text-white py-2 rounded hover:bg-secondary transition">
        Sign In
      </button>
      <Link href="/signup" className="text-secondary text-center mt-2 underline">
        New here? Create account
      </Link>
      <Link
        href="/forgot-password"
        className="text-sm text-gray-500 text-center mt-1 hover:text-primary"
      >
        Forgot password?
      </Link>
    </form>
  );
}
