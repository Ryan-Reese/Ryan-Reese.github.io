"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginScreen({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === "venice") {
      setError(false);
      onAuthenticated();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-screen px-6"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-6xl mb-8"
      >
        ❤️
      </motion.div>

      <h1
        className="text-4xl font-bold text-white mb-3"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        Hey baby
      </h1>
      <p className="text-gray-400 mb-8">Enter our secret word</p>

      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-pink-500/30 rounded-xl text-white text-center focus:outline-none focus:border-pink-500 transition-colors"
            placeholder="••••••"
            autoFocus
          />
        </motion.div>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-rose-400 text-sm text-center mt-3"
          >
            That&apos;s not it, try again
          </motion.p>
        )}

        <button
          type="submit"
          className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Enter
        </button>
      </form>
    </motion.div>
  );
}
