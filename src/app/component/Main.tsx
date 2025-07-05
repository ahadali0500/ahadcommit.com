import React from 'react'

export default function Main() {
  return (
    <section className="hero-section d-flex align-items-center" id="intro">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="hero-content-box">
              <h1 className="hero-title ">
                Ahad Ali – Full Stack Web Developer & DevOps Engineer
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700">
                As a Full Stack Web Developer and DevOps enthusiast, I specialize in transforming ideas into scalable, high-performance web platforms using technologies like React, Laravel, Docker, and modern cloud-native tools. I build robust frontend interfaces and secure backend APIs, while also implementing CI/CD pipelines, infrastructure automation, and performance optimization techniques. My focus is on delivering end-to-end digital solutions that are reliable, maintainable, and optimized for both users and developers.
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
        </div>

        {/* ✅ Fun Facts Section */}
        <div className="funfact-area mt-10">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column items-center">
                <div className="number text-3xl font-bold">
                  <span className="odometer" data-count={3}>3</span>+
                </div>
                <div className="text mt-1 text-sm sm:text-base">Years of Experience</div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column items-center">
                <div className="number text-3xl font-bold">
                  <span className="odometer" data-count={40}>40</span>+
                </div>
                <div className="text mt-1 text-sm sm:text-base">Projects Completed</div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column items-center">
                <div className="number text-3xl font-bold">
                  <span className="odometer" data-count={50}>50</span>+
                </div>
                <div className="text mt-1 text-sm sm:text-base">Happy Clients</div>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column items-center">
                <div className="number text-3xl font-bold">
                  <span className="odometer" data-count={5}>5</span>+
                </div>
                <div className="text mt-1 text-sm sm:text-base">Tech Stacks Mastered</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
