import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <header className="tj-header-area header-absolute">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center">
                            <Link href="/" style={{textDecoration:'none',color:'white'}}><div style={{ fontSize: 30 }}>Ahad Ali</div></Link>
                            <div className="header-menu">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link href="/services">Services</Link>
                                        </li>
                                        <li>
                                            <a href="#works-section">Projects</a>
                                        </li>
                                        <li>
                                            <a href="#resume-section">Resume</a>
                                        </li>
                                        <li>
                                            <a href="#skills-section">Skills</a>
                                        </li>
                                        <li>
                                            <a href="#contact-section">Contact</a>
                                        </li>
                                        <li>
                                            <a href="#skills-section">Achievements</a>
                                        </li>
                                        <li>
                                            <a href="#contact-section">Blog</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-button">
                                <a
                                    href="assets/ahad-ali-resume-full-stack-web-developer.pdf"
                                    className="btn tj-btn-primary"
                                >
                                    Hire me!
                                </a>
                            </div>
                            <div className="menu-bar d-lg-none">
                                <button>
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="tj-header-area header-2 header-sticky sticky-out">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap align-items-center">
                            <div style={{ fontSize: 30 }}>Ahad Ali</div>
                            <div className="header-menu">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="#services-section">Services</a>
                                        </li>
                                        <li>
                                            <a href="#works-section">Works</a>
                                        </li>
                                        <li>
                                            <a href="#resume-section">Resume</a>
                                        </li>
                                        <li>
                                            <a href="#skills-section">Skills</a>
                                        </li>
                                        <li>
                                            <a href="#contact-section">Contact</a>
                                        </li>
                                        <li>
                                            <a href="#skills-section">Achievements</a>
                                        </li>
                                        <li>
                                            <a href="#contact-section">Blog</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-button">
                                <a
                                    href="assets/ahad-ali-resume-full-stack-web-developer.pdf"
                                    className="btn tj-btn-primary"
                                >
                                    Hire me!
                                </a>
                            </div>
                            <div className="menu-bar d-lg-none">
                                <button>
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
