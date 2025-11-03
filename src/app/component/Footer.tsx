import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <nav className="mb-8  bg-white/5">
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <Link href="/" className="text-white font-bold hover:text-purple-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white font-bold hover:text-purple-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white font-bold hover:text-purple-500 transition">
                  Project
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-white font-bold hover:text-purple-500 transition">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-white font-bold hover:text-purple-500 transition">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-white font-bold hover:text-purple-500 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-bold hover:text-purple-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <p className="text-purple-500 font-light">
              © 2025 All rights reserved by
              <a
                href="https://www.linkedin.com/in/ahadali-webmaestro/"
                target="_blank"
                className="ml-1 font-medium hover:text-purple-400 transition"
                rel="noreferrer"
              >
                ΔĦΔĐ ΔŁƗ
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
