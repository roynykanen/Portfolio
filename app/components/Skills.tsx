"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo", "Ionic React", "Capacitor"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "PostgreSQL", "Firebase", "REST APIs"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "RevenueCat", "Google AdMob"],
  },
  {
    label: "Design & UX",
    skills: ["UI Design", "UX Research", "Prototyping", "Service Design", "User-centered Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#c88a6f] text-sm font-medium tracking-widest uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#dedcd5]">
            What I work with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-[#dedcd5]/[0.03] border border-[#dedcd5]/[0.07] hover:border-[#c88a6f]/30 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-[#c88a6f] uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-[#dedcd5]/5 text-[#8c9484]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
