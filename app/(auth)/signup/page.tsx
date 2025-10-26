"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold text-primary text-center mb-2">
        Create Account
      </h1>
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="p-2 border rounded text-gray-800"
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="p-2 border rounded"
      />
      <button className="bg-primary text-white py-2 rounded hover:bg-secondary transition">
        Sign Up
      </button>
    </form>
  );
}
