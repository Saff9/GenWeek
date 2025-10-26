"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    setSent(true);
  };

  return (
    <div>
      <h1 className="text-2xl text-primary font-semibold text-center mb-3">
        Reset Password
      </h1>
      {!sent ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded"
          />
          <button className="bg-primary text-white py-2 rounded hover:bg-secondary transition">
            Send Reset Link
          </button>
        </form>
      ) : (
        <p className="text-center text-secondary">
          Reset link sent! Check your email.
        </p>
      )}
    </div>
  );
}
