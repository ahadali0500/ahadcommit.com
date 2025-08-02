'use client';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useRouter, useSearchParams } from 'next/navigation';

const cardData = [
  {
    categories: ["EdTech", "DevOps & Deployment", "Full Stack Development"],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113690/EM_01_Dashboard_nwabix.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113687/EM_03_Dashboard_huc0mb.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113683/EM_02_Signup_cwka37.svg" },
    ],
    title: "Emergi Mentor - Bridge to Mentorship",
    description: "I manage platform deployment on AWS and VPS using CI/CD pipelines, ensuring smooth updates and ongoing maintenance. Leveraging Node.js, Laravel, React, and Next.js, I build scalable web solutions that connect Australian students and professionals with global mentors in AI, data science, and software development.",
    website: "http://emergimentors.com.au"
  },
  {
    categories: ["FinTech / Crypto", "Full Stack Development", "DevOps & Deployment"],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113676/Crypto_01_byufp5.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113679/Crypto_02_fgr4k4.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113672/Crypto_03_ugkf6d.svg" },
    ],
    title: "Cryptovia – Deposit to Withdraw",
    description: "Cryptovia is a Web2-based crypto transaction platform built using React, Next.js, Node.js, Express, MySQL, and Socket.io. Deployed on a VPS with Docker and Jenkins, it enables users to securely deposit, exchange, and withdraw crypto assets — with full backend control and real-time updates.",
  },
  {
    categories: ["EdTech", "Learning Management System (LMS)", "Full Stack Development"],
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
    categories: ["EdTech", "Exam Preparation", "Full Stack Development"],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113701/Medipedia_01_2_y7u92p.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113776/Medipedia_01_fc4khz.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113701/Medipedia_01_2_y7u92p.svg" },

    ],
    title: "Medipedia - MCQs Platform",
    description: "Medipedia is an MCQs-based web platform designed to help medical students prepare for exams. Built with Next.js, Bootstrap UI, NextAuth for authentication, and a PHP backend, it offers a seamless and focused learning experience.",
    github: "https://github.com/ahadali0500/Medipedia-project",
    website: "https://medipedia.vercel.app/"
  },
  {
    categories: ["E-commerce Solutions", "Full Stack Development", "Multi-Panel Systems"],
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
    categories: ["AI Projects", "Career Tools", "Full Stack Development"],
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
    categories: ["Real Estate"],
    images: [
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113757/Medipedia_01_20_jf9vm8.svg" },
      { type: 'image', src: "https://res.cloudinary.com/deqfevfja/image/upload/v1754113773/Medipedia_01_21_bpq4bz.svg" },
    ],
    title: "BinSadiq & MCP Real Estate",
    description: "BinSadiq & MCP Real Estate is a single-page website built with Bootstrap and PHP for showcasing pre-rented property sales in Pakistan. Designed as a digital marketing landing page, it targets the local market to generate high-quality real estate leads.",
  },
  {
    categories: ["FinTech"],
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
    categories: ["Immigration Services", "Web Maintenance & Optimization", "Full Stack Enhancement"],
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
    categories: ["Logistics & Dispatch", "Full Stack Development"],
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

const allCategories = [
  'All',
  ...Array.from(new Set(cardData.flatMap(card => card.categories)))
];

export default function Project() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCards =
    activeCategory === 'All'
      ? cardData
      : cardData.filter(card => card.categories.includes(activeCategory));

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
  };

  return (
    <section className="portfolio-section" id="works-section">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
            My Recent Works
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".4s">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </p>
        </div>

        <div className="text-center mb-4">
          {allCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`btn btn-sm mx-1 mb-2`}
              style={{
                backgroundColor: activeCategory === cat ? '#8e2de2' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#8e2de2',
                border: '1px solid #8e2de2',
              }}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row">
          {filteredCards.map((card, index) => (
            <div className="col-lg-4 mb-5 mt-4" key={index}>
              <div className="card h-100 shadow">
                <div className="position-relative">
                  <Carousel interval={4000} controls={true} indicators={false} keyboard={true} touch={true}>
                    {card.images.map((media, i) => (
                      <Carousel.Item key={i}>
                        {media.type === 'video' ? (
                          <video
                            className="d-block w-100"
                            style={{ height: '340px', objectFit: 'cover' }}
                            controls
                            autoPlay
                            muted
                            loop
                          >
                            <source src={media.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src={media.src}
                            alt={card.title}
                            className="d-block w-100"
                          // style={{ height: '340px', objectFit: 'cover' }}
                          />
                        )}
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: '1' }} >
                    {card.github && (
                      <a href={card.github} target="_blank" rel="noopener noreferrer" className="me-2">
                        <i className="fab fa-github fs-4 text-dark" />
                      </a>
                    )}
                    {card.website && (
                      <a href={card.website} target="_blank" rel="noopener noreferrer">
                        <i style={{ color: 'black' }} className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="card-body pb-3" style={{ fontSize: 'small' }}>
                  <h6 className="card-title">{card.title}
                    <span>{card.website && (
                      <a href={card.website} target="_blank" rel="noopener noreferrer">
                        <i style={{ color: 'black', fontSize: '14px', padding: '6px' }} className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}</span>
                  </h6>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
