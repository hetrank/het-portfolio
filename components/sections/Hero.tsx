"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
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
          <TypeAnimation
            sequence={[
              "AI/ML Engineer",
              1500,
              "Full Stack Developer",
              1500,
              "I build intelligent software systems",
              1500,
              "I create real-world tech solutions",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />

          <div className="flex justify-center mt-10 mb-10">
            <div className="relative w-40 h-40 md:w-48 md:h-48 transition-transform duration-500 hover:scale-105">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/40 via-purple-500/30 to-cyan-400/40 blur-2xl"></div>

              {/* Avatar frame */}
              <div className="relative rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400">
                <div className="rounded-full bg-[#020617] p-1">
                  <Image
                    src="/avatar.png"
                    alt="Het Rank avatar"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>

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

        <div className="mt-12 flex justify-center gap-8 text-gray-400">
          <a
            href="https://github.com/hetrank"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
            "
          >
            <Github size={26} strokeWidth={1.5} />
          </a>

          <a
            href="https://www.linkedin.com/in/het-rank-024540312"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
            "
          >
            <Linkedin size={26} strokeWidth={1.5} />
          </a>

          <a
            href="mailto:hetrank08@gmail.com"
            className="hover:text-white transition transform hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]
            "
          >
            <Mail size={26} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
