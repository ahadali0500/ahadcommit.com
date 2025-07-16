import React from 'react'

export default function Main() {
  return (
    <section style={{ paddingBottom: '0px' }} className="hero-section d-flex align-items-center" id="intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="hero-content-box">
              <h1 className="hero-title " style={{ lineHeight: '40px' }} >
                <span style={{ fontSize: '52px' }} >ΔĦΔĐ ΔŁƗ  </span><br></br> <br></br><span style={{ fontSize: '32px' }}> Expert in Full Stack Development, DevOps, & Agentic AI Systems</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700">
                As a Full Stack Web Developer, DevOps enthusiast, and Agentic AI expert, Ahad Ali specializes in building scalable, high-performance web platforms using React, Laravel, Docker, and modern cloud-native tools. He creates seamless frontend interfaces, secure backend APIs, and implements AI-driven automation to optimize user interactions and streamline processes. His focus is on delivering end-to-end digital solutions that are reliable, maintainable, and optimized for both users and developers.
              </p>
              <div className="button-box d-flex flex-wrap align-items-center mt-6 gap-4">
                <a href="/assets/ahad-ali-resume-full-stack-web-developer.pdf" className="btn tj-btn-secondary">
                  Download CV <i className="flaticon-download" />
                </a>

                <ul className="ul-reset social-icons flex gap-3">
                  <li>
                    <a href="https://www.linkedin.com/in/ahadali-webmaestro">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ahadali0500">
                      <i className="fa-brands fa-github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+923256234131">
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <img alt="Ahad Ali - Full Stack Web Developer, DevOps Engineer & Agentic AI Expert" src="/assets/img/ahadavatar-1.png" ></img>
          </div>
        </div>
      </div>
    </section>
  )
}
