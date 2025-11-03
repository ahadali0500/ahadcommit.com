"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaYoutube, FaDownload } from "react-icons/fa"

const roles = [
  "Full Stack Developer 🚀",
  "DevOps Engineer ⚙️",
  "AI Product Builder 🤖",
]

export default function Main() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="intro"
      className="relative overflow-hidden  bg-slate-950 text-white  pt-32 pb-20"
    >
      {/* Background Glows */}
      {/* <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16" /> */}
      {/* <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600 rounded-full blur-3xl opacity-20 -ml-16 -mb-16" /> */}

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-1 gap-14 items-center relative z-10">
        {/* LEFT SIDE */}
        <div>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
              Ahad Ali
            </span>
          </motion.h1>

          <motion.h2
            key={index}
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent h-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {roles[index]}
          </motion.h2>

          <motion.p
            className="mt-6 text-gray-300 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I’m a <strong className="text-purple-400">Full Stack Developer</strong> who builds scalable web apps,
            automates DevOps workflows, and develops AI-powered products using LLMs and generative technologies.
            I combine clean architecture, cloud automation, and agentic AI systems to create efficient, production-ready
            solutions that drive results.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="/assets/ahad-ali-resume-full-stack-web-developer.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition"
            >
              <FaDownload /> Download CV
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/ahadali-webmaestro"
                className="w-10 h-10 flex items-center justify-center border border-purple-500 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/ahadali0500"
                className="w-10 h-10 flex items-center justify-center border border-purple-500 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://wa.me/+923256234131"
                className="w-10 h-10 flex items-center justify-center border border-purple-500 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.youtube.com/@ahadcommit"
                className="w-10 h-10 flex items-center justify-center border border-purple-500 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        {/* <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-purple-700 rounded-full blur-3xl opacity-25" />
          <motion.img
            src="/assets/img/ahadavatar-1.png"
            alt="Ahad Ali - Full Stack Developer, DevOps Engineer & AI Product Builder"
            className="relative z-10 rounded-2xl border-2 border-purple-700 w-64 md:w-80 object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div> */}
      </div>
    </section>
  )
}
