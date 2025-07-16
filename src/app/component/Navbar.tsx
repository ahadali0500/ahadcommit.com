"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`custom-navbar ${isSticky ? "sticky" : ""}`}>
      <div className="nav-container">
        <Link href="/" className="brand">ΔĦΔĐ ΔŁƗ</Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
          <Link href="/experience" onClick={closeMenu}>Experience</Link>
          <Link href="/resume" onClick={closeMenu}>Resume</Link>

          <Link href="/skills" onClick={closeMenu}>Skills</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          {/* <Link href="#skills-section" onClick={closeMenu}>Achievements</Link>
          <Link href="#contact-section" onClick={closeMenu}>Blog</Link> */}
        </div>

        <div className="nav-right">
          <Link href="/assets/ahad-ali-resume-full-stack-web-developer.pdf" className="hire-btn">Hire Me!</Link>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={`bar ${menuOpen ? "rotate1" : ""}`} />
            <span className={`bar ${menuOpen ? "fade" : ""}`} />
            <span className={`bar ${menuOpen ? "rotate2" : ""}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
