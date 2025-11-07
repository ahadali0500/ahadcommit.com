'use client';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useRouter, useSearchParams } from 'next/navigation';
import ImageCarousel from "./image-carousel"
import { ExternalLink, Github, Globe, Globe2 } from 'lucide-react';
import { motion } from "framer-motion";
import { features } from 'process';
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';

const cardData = [
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud", "AI / LLM Tools"],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113690/EM_01_Dashboard_nwabix.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113687/EM_03_Dashboard_huc0mb.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113683/EM_02_Signup_cwka37.svg" },
    ],
    title: "Emergi Mentor - Bridge to Mentorship",
    description: "I manage platform deployment on AWS and VPS using CI/CD pipelines, ensuring smooth updates and ongoing maintenance. Leveraging Node.js, Laravel, React, and Next.js, I build scalable web solutions that connect Australian students and professionals with global mentors in AI, data science, and software development.",
    website: "http://emergimentors.com.au",
    feature: true
  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud",],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113676/Crypto_01_byufp5.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113679/Crypto_02_fgr4k4.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113672/Crypto_03_ugkf6d.svg" },
    ],
    title: "Cryptovia – Deposit to Withdraw",
    description: "Cryptovia is a Web2-based crypto transaction platform built using React, Next.js, Node.js, Express, MySQL, and Socket.io. Deployed on a VPS with Docker and Jenkins, it enables users to securely deposit, exchange, and withdraw crypto assets — with full backend control and real-time updates.",
    feature: true
  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud",],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113704/Medipedia_01_3_pm3zz1.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113710/Medipedia_01_5_qo2pck.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113710/Medipedia_01_4_bfyk6s.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113716/Medipedia_01_6_qlftbs.svg" },
    ],
    title: "Skill Alfa - Smart Learning Platform",
    description: "Skill Alfa is a smart learning platform built for a modern education experience. Developed using Laravel and React for learners, and Laravel with Bootstrap for admin, it delivers a smooth, intuitive interface tailored for a growing edtech startup.",
    github: "https://github.com/ahadali0500/skillalfa-cms-project",
    website: "https://www.skillalfa.com"
  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud",],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113701/Medipedia_01_2_y7u92p.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113776/Medipedia_01_fc4khz.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113701/Medipedia_01_2_y7u92p.svg" },

    ],
    title: "Medipedia - MCQs Platform",
    description: "Medipedia is an MCQs-based web platform designed to help medical students prepare for exams. Built with Next.js, Bootstrap UI, NextAuth for authentication, and a PHP backend, it offers a seamless and focused learning experience.",
    github: "https://github.com/ahadali0500/Medipedia-project",
    website: "https://medipedia.vercel.app/",
    feature: true

  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud",],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113747/Medipedia_01_14_eztp2y.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113753/Medipedia_01_16_kgcejo.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113741/Medipedia_01_15_xkdzuw.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113753/Medipedia_01_19_ikhpqv.svg" },
    ],
    title: "Josam Solutions",
    description: "Josam is a robust e-commerce platform developed with Node.js, Express.js, React.js, and Next.js, featuring custom API integrations and advanced search capabilities. The system includes four distinct panels — admin, vendor, and customer (web-based) and a dedicated mobile app for drivers..",
    github: "https://github.com/ahadali0500/Job-portal-project",
    website: "https://job-tech.vercel.app/"
  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud"],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113699/Job_Tech_01_evc4kd.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113697/Job_Tech_01_3_aqhjyi.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113686/Job_Tech_01_2_pkeips.svg" },
    ],
    title: "JobTech – AI-Powered Quiz, Interview & Resume Generator",
    description: "I developed an AI-driven web application designed to generate quizzes, interview questions, and professional resumes. The platform leverages advanced technologies such as Next.js for the frontend and PHP for backend operations.",
    github: "https://github.com/ahadali0500/Job-portal-project",
    website: "https://job-tech.vercel.app/"
  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud",],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113757/Medipedia_01_20_jf9vm8.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113773/Medipedia_01_21_bpq4bz.svg" },
    ],
    title: "BinSadiq & MCP Real Estate",
    description: "BinSadiq & MCP Real Estate is a single-page website built with Bootstrap and PHP for showcasing pre-rented property sales in Pakistan. Designed as a digital marketing landing page, it targets the local market to generate high-quality real estate leads.",
  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud",],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113728/Medipedia_01_8_irjlrf.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113723/Medipedia_01_9_taliss.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113713/Medipedia_01_7_liaalj.svg" }

    ],
    title: "MajesticGB - Global Produce Delivery",
    description: "Majestic Distribution is a PHP and Bootstrap-based platform designed to streamline national bookings and international syndicate deliveries of fresh fruits and vegetables. It offers a simple, efficient interface for managing large-scale produce logistics.",
    github: "https://github.com/ahadali0500/majesticgb-project",
    website: "https://majesticgb.com/"
  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud",],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113773/Medipedia_01_24_s08uy3.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113771/Medipedia_01_25_blrbvj.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113769/Medipedia_01_23_ke6hy9.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113768/Medipedia_01_22_wqswsu.svg" },

    ],
    title: "Interact Immigration - Maintenance",
    description: "Interact Immigration is a platform built to simplify immigration-related services by optimizing both front-end and back-end workflows. I improved and maintained the system to enhance user experience, operational efficiency, and overall platform stability.",
    website: "https://interactimmigration.com"
  },
  {
    categories: ["Backend / API projects", "Full-Stack projects", "DevOps & Cloud",],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113735/Medipedia_01_10_wcy24r.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113728/Medipedia_01_11_cq6hyn.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113728/Medipedia_01_12_hloe1v.svg" },
    ],
    title: "AutoMove - Truck Dispatch",
    description: "Automove is a dispatch and logistics platform built for Desired Technology, designed to streamline bookings and delivery operations. Developed using React and Bootstrap on the frontend with a PHP backend, it ensures efficient fleet and order management.",
    github: "https://github.com/ahadali0500/lead-generations-project",
    website: "https://moverslead.interactimmigration.com/callcenter/"
  }
];

const allCategories = ["All", ...Array.from(new Set(cardData.flatMap((card) => card.categories)))]

export default function Project({ title = "My Recent Works", page = 'project' }: any) {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hovered, setHovered] = useState(false);


  const filteredCards = activeCategory === "All" ? cardData : cardData.filter((card) => card.categories.includes(activeCategory))
  const filteredCard = page === 'home'
    ? filteredCards.filter((card) => card.feature === true)
    : filteredCards;

  return (
    <section className="py-20 bg-slate-950" id="works-section">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 md:mt-20">
        <div className="text-center mb-5 md:mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">{title}</h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto"> We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers. </p>
        </div>

        <div className="no-scrollbar flex flex-nowrap justify-center overflow-x-auto snap-x snap-mandatory gap-1 md:gap-2 mb-10 md:mb-10 -mx-4 px-4 w-full">
          {allCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shrink-0 whitespace-nowrap snap-center ${activeCategory === cat
                ? "bg-purple-600 text-white shadow"
                : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCard.map((card, index) => (
            <div
              key={index}
              className=" bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Carousel */}
              <div className="relative group">
                <ImageCarousel
                  images={card.images}
                  autoSlideInterval={3000}
                  onImageChange={(idx) => console.log(`[v0] Image changed to ${idx}`)}
                />

                {/* Top-left icons */}
                <div className="absolute top-3 left-2 flex gap-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {card.website && (
                    <a
                      href={card.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 shadow-md"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <motion.div
                        animate={
                          hovered
                            ? { rotate: 0 } // stops shaking when hovered
                            : { rotate: [0, -5, 5, -5, 5, 0] } // shake loop
                        }
                        transition={{
                          duration: 1.2,
                          repeat: hovered ? 0 : Infinity,
                        }}
                      >
                        <ExternalLink size={18} className="text-white" />
                      </motion.div>
                    </a>
                  )}

                  {card.github && (
                    <a
                      href={card.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 shadow-md"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                    >
                      <motion.div
                        animate={
                          hovered
                            ? { rotate: 0 } // stops shaking when hovered
                            : { rotate: [0, -5, 5, -5, 5, 0] } // shake loop
                        }
                        transition={{
                          duration: 1.2,
                          repeat: hovered ? 0 : Infinity,
                        }}
                      >
                        <Github size={18} className="text-white" />
                      </motion.div>
                    </a>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h6 className="text-lg font-bold text-white mb-2">{card.title}</h6>
                <p className="text-gray-300 text-sm md:text-md">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform" >
            View All Projects <FaArrowCircleRight size={16} />
          </Link>
        </div>


      </div>
    </section>
  )
}
