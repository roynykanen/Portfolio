"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "../data/projects";

const categoryColors: Record<Project["category"], string> = {
  mobile: "text-[#8c9484] bg-[#8c9484]/10 border-[#8c9484]/30",
  web: "text-[#c88a6f] bg-[#c88a6f]/10 border-[#c88a6f]/30",
  ux: "text-[#dedcd5]/60 bg-[#dedcd5]/5 border-[#dedcd5]/15",
  other: "text-[#8c9484]/70 bg-[#8c9484]/8 border-[#8c9484]/20",
};

const categoryLabels: Record<Project["category"], string> = {
  mobile: "Mobile",
  web: "Web",
  ux: "UX/UI",
  other: "Other",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isGithub = project.link.includes("github.com");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col rounded-2xl bg-[#dedcd5]/[0.03] border border-[#dedcd5]/[0.07] hover:border-[#c88a6f]/30 overflow-hidden card-hover"
    >
      <div className="relative h-52 bg-gradient-to-br from-[#c88a6f]/10 to-[#8c9484]/10 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-20">
              {project.category === "mobile"
                ? "📱"
                : project.category === "ux"
                ? "🎨"
                : "🌐"}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent" />
        <span
          className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full border font-medium ${
            categoryColors[project.category]
          }`}
        >
          {categoryLabels[project.category]}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs text-[#8c9484]/60 mb-1 uppercase tracking-wider">
          {project.subtitle}
        </p>
        <h3 className="text-lg font-bold text-[#dedcd5] mb-3 group-hover:text-[#c88a6f] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[#8c9484] leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-[#dedcd5]/5 text-[#8c9484]/70 border border-[#dedcd5]/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#c88a6f] hover:text-[#d89a7f] transition-colors font-medium"
          >
            {isGithub ? <Code2 size={15} /> : <ExternalLink size={15} />}
            {project.linkLabel}
          </a>
        )}
      </div>
    </motion.div>
  );
}
