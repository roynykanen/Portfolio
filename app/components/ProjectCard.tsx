"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "../data/projects";

const categoryColors: Record<Project["category"], string> = {
  mobile: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  web: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  ux: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  other: "text-amber-400 bg-amber-500/10 border-amber-500/20",
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
  const isCode2 = project.link.includes("github.com");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-indigo-900/30 to-purple-900/20 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        <span
          className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full border font-medium ${
            categoryColors[project.category]
          }`}
        >
          {categoryLabels[project.category]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">
          {project.subtitle}
        </p>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-gray-500 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            {isCode2 ? <Code2 size={15} /> : <ExternalLink size={15} />}
            {project.linkLabel}
          </a>
        )}
      </div>
    </motion.div>
  );
}
