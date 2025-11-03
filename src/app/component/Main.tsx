export default function Main() {
  return (
    <section className="pt-40 pb-12 bg-[#0f0715] relative overflow-hidden" id="intro">
      <div className="absolute top-0 right-0 w-80 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                  ΔĦΔĐ ΔŁƗ
                </span>
                <br />
                <span className="text-3xl md:text-4xl bg-gradient-to-r from-purple-500 to-white bg-clip-text text-transparent">
                  Expert in Full Stack Development, DevOps, & Agentic AI Systems
                </span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
                As a Full Stack Web Developer, DevOps enthusiast, and Agentic AI expert, Ahad Ali specializes in
                building scalable, high-performance web platforms using React, Laravel, Docker, and modern cloud-native
                tools. He creates seamless frontend interfaces, secure backend APIs, and implements AI-driven automation
                to optimize user interactions and streamline processes. His focus is on delivering end-to-end digital
                solutions that are reliable, maintainable, and optimized for both users and developers.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/assets/ahad-ali-resume-full-stack-web-developer.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition"
                >
                  Download CV <i className="flaticon-download" />
                </a>

                <ul className="flex gap-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ahadali-webmaestro"
                      className="w-10 h-10 flex items-center justify-center border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/ahadali0500"
                      className="w-10 h-10 flex items-center justify-center border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
                    >
                      <i className="fa-brands fa-github" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/+923256234131"
                      className="w-10 h-10 flex items-center justify-center border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
                    >
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@ahadcommit"
                      className="w-10 h-10 flex items-center justify-center border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-600 rounded-full blur-3xl opacity-20 -ml-10 -mb-10" />
            <img
              alt="Ahad Ali - Full Stack Web Developer, DevOps Engineer & Agentic AI Expert"
              src="/assets/img/ahadavatar-1.png"
              className="relative z-10 rounded-3xl border-2 border-purple-700 rotate-3 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
