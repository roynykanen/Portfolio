"use client";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@roynykanen",
    href: "https://github.com/roynykanen",
  },
  {
    icon: FaLinkedin,
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
          <span className="text-[#c88a6f] text-sm font-medium tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#dedcd5]">
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
            <p className="text-[#dedcd5]/70 text-lg leading-relaxed mb-8">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind, a question, or just want to say hi — feel free
              to reach out on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/roynykanen/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0A66C2] hover:bg-[#0958a8] text-white font-medium transition-all duration-200 shadow-lg shadow-[#0A66C2]/20"
            >
              <FaLinkedin size={18} />
              Connect on LinkedIn
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
                className="flex items-center gap-4 p-4 rounded-xl bg-[#dedcd5]/[0.03] border border-[#dedcd5]/[0.07] hover:border-[#c88a6f]/30 hover:bg-[#dedcd5]/[0.05] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#c88a6f]/10 flex items-center justify-center text-[#c88a6f] group-hover:bg-[#c88a6f]/20 transition-all">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#8c9484]/60 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-[#dedcd5]/80 font-medium">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
