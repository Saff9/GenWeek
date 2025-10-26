"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  full?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  full,
  ...props
}: ButtonProps) {
  const base =
    "rounded-lg font-semibold px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary focus:ring-primary",
    secondary: "bg-secondary text-black hover:bg-primary/80 focus:ring-secondary",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${full ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
}
