"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const filters: { label: string; value: Project["category"] | "all"; activeClass: string }[] = [
  { label: "All", value: "all", activeClass: "bg-[#c88a6f] text-[#1d1d1d] shadow-[#c88a6f]/20" },
  { label: "Mobile", value: "mobile", activeClass: "bg-[#0d1e2e] text-[#5b9bd5] border border-[#5b9bd5]/40 shadow-[#5b9bd5]/10" },
  { label: "Web", value: "web", activeClass: "bg-[#0d1f15] text-[#5ab87a] border border-[#5ab87a]/40 shadow-[#5ab87a]/10" },
  { label: "UX/UI", value: "ux", activeClass: "bg-[#1a0f2e] text-[#a07ed4] border border-[#a07ed4]/40 shadow-[#a07ed4]/10" },
  { label: "Other", value: "other", activeClass: "bg-[#281e08] text-[#d4a44c] border border-[#d4a44c]/40 shadow-[#d4a44c]/10" },
];

export default function Projects() {
  const [active, setActive] = useState<Project["category"] | "all">("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-[#c88a6f] text-sm font-medium tracking-widest uppercase">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#dedcd5]">
            What I&apos;ve built
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f.value
                  ? `shadow-lg ${f.activeClass}`
                  : "bg-[#dedcd5]/5 text-[#8c9484] hover:text-[#dedcd5] border border-[#dedcd5]/10 hover:border-[#dedcd5]/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
