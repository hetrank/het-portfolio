"use client";

import { motion } from "framer-motion";

interface SkillProps {
  category: string;
  items: string[];
}

export default function SkillCard({ category, items }: SkillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
    >
      <h3 className="text-xl font-semibold mb-6">{category}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
