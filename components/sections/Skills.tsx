"use client";

import SkillCard from "./SkillCard";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I leverage modern development tools and AI-assisted workflows to build scalable,
          production-ready applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

      </div>
    </section>
  );
}
