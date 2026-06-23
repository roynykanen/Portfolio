"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, MapPin, Lightbulb } from "lucide-react";

const courses = [
  "Fundamentals of Programming",
  "Foundations of Web Development",
  "Dynamic Web Applications with JavaScript",
  "Full Stack Development",
  "Introduction to Mobile App Design and Development",
  "User-centered Design of Digital Services",
  "Service Design",
  "Modelling a Digital Service",
  "Defining and Designing a Software Product",
  "Fundamentals of Software Testing",
  "Developing and Maintaining Integrations and APIs",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#c88a6f] text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#dedcd5]">
            Who I am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-[#dedcd5]/10 bg-[#dedcd5]/5 shrink-0">
              {/* Replace /images/me.jpg with your own photo */}
              <Image
                src="/images/me.jpg"
                alt="Roy Nykänen"
                fill
                className="object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          </motion.div>

          {/* Bio + details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <p className="text-[#dedcd5]/80 text-lg leading-relaxed mb-6">
              Recently graduated Bachelor of Business Information Technology from
              Laurea University of Applied Sciences. Passionate about software
              development, UX/UI design, and digital service development.
            </p>
            <p className="text-[#8c9484] leading-relaxed mb-8">
              I&apos;m interested in projects involving the design and development of
              applications, web services, and user-centered digital solutions. I enjoy
              working at the intersection of technology and design — building things that
              are both functional and delightful to use.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[#8c9484]">
                <GraduationCap size={18} className="text-[#c88a6f] shrink-0" />
                <span>BBA — Laurea University of Applied Sciences</span>
              </div>
              <div className="flex items-center gap-3 text-[#8c9484]">
                <MapPin size={18} className="text-[#c88a6f] shrink-0" />
                <span>Vantaa, Finland</span>
              </div>
              <div className="flex items-center gap-3 text-[#8c9484]">
                <Lightbulb size={18} className="text-[#c88a6f] shrink-0" />
                <span>Open to new opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-[#dedcd5] mb-5 uppercase tracking-wider">
              Key Courses
            </h3>
            <div className="flex flex-wrap gap-2">
              {courses.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1.5 text-xs rounded-full bg-[#dedcd5]/5 border border-[#dedcd5]/10 text-[#8c9484] hover:border-[#c88a6f]/40 hover:text-[#dedcd5]/70 transition-all duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
