"use client";
import { motion } from "framer-motion";
import { Code2, Link, FileText, Mail } from "lucide-react";

const links = [
  {
    icon: Code2,
    label: "GitHub",
    value: "@roynykanen",
    href: "https://github.com/roynykanen",
  },
  {
    icon: Link,
    label: "LinkedIn",
    value: "Roy Nykänen",
    href: "https://www.linkedin.com/in/roynykanen/",
  },
  {
    icon: FileText,
    label: "Thesis",
    value: "Read on Theseus",
    href: "https://www.theseus.fi/handle/10024/915194",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            Let&apos;s connect
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind, a question, or just want to say hi — my inbox is
              always open.
            </p>
            <a
              href="mailto:28lar00@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40"
            >
              <Mail size={18} />
              Say Hello
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-gray-200 font-medium">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
