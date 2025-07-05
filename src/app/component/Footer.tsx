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
                                </ul>
                            </nav>
                        </div>
                        <div className="copy-text">
                            <p>
                                © 2024 All rights reserved by{" "}
                                <a
                                    href="https://www.linkedin.com/in/ahadali-webmaestro/"
                                    target="_blank"
                                >
                                    Ahad Ali
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
