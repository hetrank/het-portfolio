"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-16 text-center"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8"
        >
          <h3 className="text-2xl font-semibold mb-2">
            Social Intern — People’s Welfare Society
          </h3>

          <p className="text-gray-400 mb-6">
            Conducted field research and built technology solutions to support agricultural decision making.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>• Performed agricultural research across multiple farms analyzing soil health and irrigation efficiency</li>
            <li>• Built a responsive web platform to help farmers improve crop selection</li>
            <li>• Optimized a school website improving performance and navigation</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
