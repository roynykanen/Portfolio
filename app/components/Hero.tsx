"use client";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Link, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-600/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-pink-600/8 rounded-full blur-[80px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Roy Nykänen</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bachelor of Business Information Technology
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Recently graduated from Laurea University of Applied Sciences. Passionate about
          software development, UX/UI design, and building user-centered digital solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-5 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://github.com/roynykanen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            <Code2 size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/roynykanen/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            <Link size={18} />
          </a>
          <a
            href="https://www.theseus.fi/handle/10024/915194"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
          >
            <FileText size={18} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-400 transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
