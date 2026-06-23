"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1d1d1d]/90 backdrop-blur-md border-b border-[#dedcd5]/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="text-xl font-bold gradient-text">
          Roy Nykänen
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-[#8c9484] hover:text-[#dedcd5] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
          <a
            href="https://github.com/roynykanen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-full bg-[#c88a6f]/10 border border-[#c88a6f]/30 text-[#c88a6f] hover:bg-[#c88a6f]/20 transition-all duration-200"
          >
            GitHub
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#8c9484] hover:text-[#dedcd5]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1d1d1d]/95 backdrop-blur-md border-b border-[#dedcd5]/5 px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[#8c9484] hover:text-[#dedcd5] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
