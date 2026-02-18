"use client";

import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  github,
  demo,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-white/20"
    >
      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      <p className="text-blue-400 mb-4">{subtitle}</p>

      <p className="text-gray-300 text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          className="text-sm text-white hover:underline"
        >
          GitHub →
        </a>
        <a
          href={demo}
          target="_blank"
          className="text-sm text-white hover:underline"
        >
          Live Demo →
        </a>
      </div>
    </motion.div>
  );
}
