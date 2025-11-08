"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/50 border-b border-purple-500/10 transition-shadow duration-300"
    >

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="text-2xl font-bold text-white">
          ΔĦΔĐ ΔŁƗ
        </Link>

        <div
          className={`flex flex-col md:flex-row gap-8 md:gap-6 absolute md:relative top-20 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-[#0c1115] md:bg-transparent p-6 md:p-0 transition-all duration-300 ${menuOpen ? "flex" : "hidden md:flex"}`}
        >
          {/* <div className="absolute w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" /> */}

          <Link href="/" onClick={closeMenu} className="text-white font-medium hover:text-purple-500 transition">
            Home
          </Link>
          <Link
            href="/projects"
            onClick={closeMenu}
            className="text-white font-medium hover:text-purple-500 transition"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            onClick={closeMenu}
            className="text-white font-medium hover:text-purple-500 transition"
          >
            Experience
          </Link>
          <Link href="/blog" onClick={closeMenu} className="text-white font-medium hover:text-purple-500 transition">
            Blog
          </Link>
          <Link href="/skills" onClick={closeMenu} className="text-white font-medium hover:text-purple-500 transition">
            Skills
          </Link>
          <Link href="/contact" onClick={closeMenu} className="text-white font-medium hover:text-purple-500 transition">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/assets/ahad-ali-resume-full-stack-web-developer.pdf"
            className="hidden md:inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Hire Me!
          </Link>
          <button className="md:hidden flex flex-col gap-1 w-8 h-8" onClick={toggleMenu}>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>
    </nav>

  )
}
