"use client";

import { SiNextdotjs, SiTailwindcss, SiNodedotjs, SiFigma } from "react-icons/si";
import { BiCube } from "react-icons/bi"; // placeholder for shadcn UI
import { JSX } from "react";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  { name: "Next.js", icon: <SiNextdotjs size={28} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
  { name: "Shadcn UI", icon: <BiCube size={28} /> },
  { name: "Figma", icon: <SiFigma size={28} /> },
  { name: "Node.js", icon: <SiNodedotjs size={28} /> },
];
export function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-xl bg-card hover:bg-card/80 hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <div className="text-6xl">{skill.icon}</div> 
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}