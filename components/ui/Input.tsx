"use client";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-full text-gray-800">
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        {...props}
        className="border border-gray-300 rounded-lg p-2 focus:ring-primary focus:border-primary outline-none"
      />
    </div>
  );
}
