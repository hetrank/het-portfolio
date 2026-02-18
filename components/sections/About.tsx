"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about-me" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-10"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          {about.description}
        </motion.p>

      </div>
    </section>
  );
}
