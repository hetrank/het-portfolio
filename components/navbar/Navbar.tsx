"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Het Rank
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
