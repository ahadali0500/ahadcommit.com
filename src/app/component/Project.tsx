'use client';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useRouter, useSearchParams } from 'next/navigation';

const cardData = [
  {
    categories: ["AI Projects", "EdTech", "LLM Integrations"],
    images: [
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/6450679bdd21473da802beee5e9cfcd6-1744134028720/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop%20(1).png" },
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/f107ef85c61e4b95ad6c88ee2be4a80a-1742734879217/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop222222222222.png" },
      // { type: 'video', src: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ],
    title: "JobTech – AI-Powered Quiz, Interview & Resume Generator",
    description: "I developed an AI-driven web application designed to generate quizzes, interview questions, and professional resumes. The platform leverages advanced technologies such as Next.js for the frontend and PHP for backend operations.",
    github: "https://github.com/ahadali0500/Job-portal-project",
    website: "https://job-tech.vercel.app"
  },
  {
    categories: ["E-commerce Solutions"],
    images: [
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/f107ef85c61e4b95ad6c88ee2be4a80a-1742734879217/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop222222222222.png" }
    ],
    title: "MajesticGB - Global Produce Delivery",
    description: "PHP Bootstrap solution for effortless national bookings and international syndicate deliveries of fresh fruits and vegetables.",
    github: "https://github.com/ahadali0500/majesticgb-project",
    website: "https://majesticgb.com"
  },
  {
    categories: ["Institute Website with LMS"],
    images: [
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/792d4a1ca82297d9943b31b99622eec5-1741712614565/Screenshot%202025-03-11%20220321.png" }
    ],
    title: "Skill Alfa - Smart Learning Platform",
    description: "Check out Skill Alfa! Built with Laravel and React for learners and Laravel + Bootstrap for admin. Focused on smooth, user-friendly education.",
    github: "https://github.com/ahadali0500/skillalfa-cms-project",
    website: "https://www.skillalfa.com"
  },
  {
    categories: ["Logistics"],
    images: [
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/3c2caef3eb6ac076d239dfb2ee7e6519-1741712338391/Screenshot%202025-03-11%20215832.png" }
    ],
    title: "AutoMove - Truck Dispatch",
    description: "Developed for Desired Technology: Truck dispatch site with call center and admin dashboard. Frontend in React, backend in PHP.",
    github: "https://github.com/ahadali0500/lead-generations-project",
    website: "https://moverslead.interactimmigration.com/callcenter"
  },
  {
    categories: ["Healthcare Education"],
    images: [
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/5fae29f344e371a0fcd97d02005a4a27-1741712790405/Screenshot%202025-03-11%20220618.png" }
    ],
    title: "Medipedia - MCQs Platform",
    description: "An MCQs-based web app for medical students built with Next.js, Bootstrap UI, NextAuth, and PHP backend.",
    github: "https://github.com/ahadali0500/Medipedia-project",
    website: "https://medipedia.vercel.app/"
  },
  {
    categories: ["Real Estate"],
    images: [
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/74ebd7e1c419a91c932d5740212e8be7-1742736827483/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop2222222222222222222222222222.jpg" }
    ],
    title: "BinSadiq - Real Estate",
    description: "Single-page website for pre-rented property sales in Pakistan. Built using Bootstrap."
  },
  {
    categories: ["Immigration Websites"],
    images: [
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/cf111a76111161e5cfa7c41681ed6cc5-1741713001937/Screenshot%202025-03-11%20220823.png" }
    ],
    title: "Interact Immigration - Maintenance",
    description: "Fixed bugs, added modules, and maintained this PHP/Bootstrap-based site at Desired Technology.",
    website: "https://interactimmigration.com/"
  },
  {
    categories: ["FinTech"],
    images: [
      { type: 'image', src: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/e55f8ec0d5368ca912e20e073de4deb3-1741713367004/Screenshot%202025-03-11%20221401.png" }
    ],
    title: "Algoscripts",
    description: "Integrated real-time stock APIs into Laravel + Bootstrap interface for script-based trading logic."
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

                  <div className="position-absolute top-0 end-0 m-2" style={{zIndex:'1'}} >
                    {card.github && (
                      <a href={card.github} target="_blank" rel="noopener noreferrer" className="me-2">
                        <i className="fab fa-github fs-4 text-dark" />
                      </a>
                    )}
                    {card.website && (
                      <a href={card.website} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-globe fs-4 text-dark" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="card-body pb-3" style={{ fontSize: 'small' }}>
                  <h6 className="card-title">{card.title}</h6>
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
