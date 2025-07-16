import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="tj-footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="footer-menu">
                            <nav>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/projects">Project</Link>
                                    </li>
                                    <li>
                                        <Link href="/experience">Experience</Link>
                                    </li>
                                    <li>
                                        <Link href="/resume">Resume</Link>
                                    </li>
                                    <li>
                                        <Link href="/skills">Skills</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="copy-text">
                            <p>
                                © 2025 All rights reserved by
                                <a
                                    href="https://www.linkedin.com/in/ahadali-webmaestro/"
                                    target="_blank"
                                    style={{marginLeft:'4px'}}
                                >
                                    ΔĦΔĐ ΔŁƗ
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
