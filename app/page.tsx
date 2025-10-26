"use client";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-accent text-primary">
      <div className="text-center mb-8">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
        >
          <Camera className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold">Welcome to GenWeek</h1>
        <p className="text-gray-700">Share your weekly stories and vibes ✨</p>
      </div>
    </main>
  );
}
