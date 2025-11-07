"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaYoutube, FaDownload, FaPaperPlane } from "react-icons/fa"

export default function Main() {
  return (
    <section className="relative flex flex-col justify-center items-center text-center w-full bg-slate-950 text-white min-h-screen p-20" >
      <div className="absolute w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <motion.h2
          className="text-2xl md:text-2xl leading-tight mb-5"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          — Hello, I'm Ahad Ali 👋
        </motion.h2>

        {/* Animated Title */}
        <motion.h1
          className="text-2xl md:text-5xl font-bold  mb-8"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Software Engineer  (Full Stack + DevOps)
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-sm md:text-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I’m <span className="text-purple-400 font-semibold">Ahad Ali</span>, a developer passionate about building
          <span className="text-purple-400 font-semibold">AI-driven web applications</span> that are clean, scalable,
          and cloud-ready. With expertise in
          <span className="text-purple-400 font-semibold">Full Stack Development</span> and
          <span className="text-purple-400 font-semibold">DevOps automation</span>,
          I design systems that deploy seamlessly and scale efficiently.
          My focus is on merging
          <span className="text-purple-400 font-semibold"> AI, innovation, and reliability</span>
          to craft intelligent products that empower users and drive real impact.

        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform" >
            <FaPaperPlane /> Get In Touch
          </Link>

          <div className="flex gap-4">
            <SocialLink href="https://linkedin.com/in/ahadcommit" icon={<FaLinkedinIn />} />
            <SocialLink href="https://github.com/ahadali0500" icon={<FaGithub />} />
            <SocialLink href="https://wa.me/+923256234131" icon={<FaWhatsapp />} />
            <SocialLink href="https://www.youtube.com/@ahadcommit" icon={<FaYoutube />} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-10 h-10 flex items-center justify-center bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 rounded-3xl transition-all hover:shadow-lg "
    >
      {icon}
    </a>
  )
}
