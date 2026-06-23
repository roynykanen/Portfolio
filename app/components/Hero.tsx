"use client";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#c88a6f]/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#8c9484]/6 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-[#c88a6f]/5 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(222,220,213,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(222,220,213,0.5) 1px, transparent 1px)",
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
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-[#c88a6f] bg-[#c88a6f]/10 border border-[#c88a6f]/20 rounded-full">
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
          className="text-xl md:text-2xl text-[#8c9484] mb-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bachelor of Business Information Technology
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-[#8c9484]/80 mb-10 max-w-2xl mx-auto leading-relaxed"
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
            className="px-7 py-3 rounded-full bg-[#c88a6f] hover:bg-[#b87a5f] text-[#1d1d1d] font-semibold transition-all duration-200 shadow-lg shadow-[#c88a6f]/20 hover:shadow-[#c88a6f]/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-[#dedcd5]/15 text-[#dedcd5]/70 hover:text-[#dedcd5] hover:border-[#dedcd5]/30 transition-all duration-200"
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
            className="p-2.5 rounded-full border border-[#dedcd5]/10 text-[#8c9484] hover:text-[#dedcd5] hover:border-[#dedcd5]/25 transition-all"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/roynykanen/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-[#dedcd5]/10 text-[#8c9484] hover:text-[#dedcd5] hover:border-[#dedcd5]/25 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8c9484]/50 hover:text-[#8c9484] transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
