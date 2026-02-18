"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">

        {/* Small Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-6"
        >
          Het Rank
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-10"
        >
          I build intelligent software systems and full-stack applications powered by AI.
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            View Projects
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Contact Me
          </Link>
          <a
            href="/Het_Rank_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-blue-400/40 text-blue-300 hover:bg-blue-500/10 transition"
          >
            View Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
