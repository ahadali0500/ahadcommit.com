'use client';
import React, { useState } from 'react';

const cardData = [
  {
    category: "AI Projects",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/6450679bdd21473da802beee5e9cfcd6-1744134028720/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop%20(1).png",
    title: "JobTech – AI-Powered Quiz, Interview & Resume Generator",
    description: "I developed an AI-driven web application designed to generate quizzes, interview questions, and professional resumes. The platform leverages advanced technologies such as Next.js for the frontend and PHP for backend operations.",
    github: "https://github.com/ahadali0500/Job-portal-project",
    website: "https://job-tech.vercel.app"
  },
  {
    category: "Company Websites",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/f107ef85c61e4b95ad6c88ee2be4a80a-1742734879217/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop222222222222.png",
    title: "MajesticGB - Global Produce Delivery",
    description: "PHP Bootstrap solution for effortless national bookings and international syndicate deliveries of fresh fruits and vegetables.",
    github: "https://github.com/ahadali0500/majesticgb-project",
    website: "https://majesticgb.com"
  },
  {
    category: "EdTech",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/792d4a1ca82297d9943b31b99622eec5-1741712614565/Screenshot%202025-03-11%20220321.png",
    title: "Skill Alfa - Smart Learning Platform",
    description: "Check out Skill Alfa! Built with Laravel and React for learners and Laravel + Bootstrap for admin. Focused on smooth, user-friendly education.",
    github: "https://github.com/ahadali0500/skillalfa-cms-project",
    website: "https://www.skillalfa.com"
  },
  {
    category: "Logistics",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/3c2caef3eb6ac076d239dfb2ee7e6519-1741712338391/Screenshot%202025-03-11%20215832.png",
    title: "AutoMove - Truck Dispatch",
    description: "Developed for Desired Technology: Truck dispatch site with call center and admin dashboard. Frontend in React, backend in PHP.",
    github: "https://github.com/ahadali0500/lead-generations-project",
    website: "https://moverslead.interactimmigration.com/callcenter"
  },
  {
    category: "EdTech",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/5fae29f344e371a0fcd97d02005a4a27-1741712790405/Screenshot%202025-03-11%20220618.png",
    title: "Medipedia - MCQs Platform",
    description: "An MCQs-based web app for medical students built with Next.js, Bootstrap UI, NextAuth, and PHP backend.",
    github: "https://github.com/ahadali0500/Medipedia-project",
    website: "https://medipedia.vercel.app/"
  },
  {
    category: "Company Websites",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/74ebd7e1c419a91c932d5740212e8be7-1742736827483/New%20Website%20Blue%20Mockup%20Instagram%20-%20Laptop2222222222222222222222222222.jpg",
    title: "BinSadiq - Real Estate",
    description: "Single-page website for pre-rented property sales in Pakistan. Built using Bootstrap.",
  },
  {
    category: "Company Websites",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/cf111a76111161e5cfa7c41681ed6cc5-1741713001937/Screenshot%202025-03-11%20220823.png",
    title: "Interact Immigration - Maintenance",
    description: "Fixed bugs, added modules, and maintained this PHP/Bootstrap-based site at Desired Technology.",
    website: "https://interactimmigration.com/"
  },
  {
    category: "FinTech",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/e55f8ec0d5368ca912e20e073de4deb3-1741713367004/Screenshot%202025-03-11%20221401.png",
    title: "Algoscripts",
    description: "Integrated real-time stock APIs into Laravel + Bootstrap interface for script-based trading logic.",
  }
];

const categories = ['All', ...Array.from(new Set(cardData.map(card => card.category)))];

export default function Project() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const toggleText = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const filteredCards =
    activeCategory === 'All'
      ? cardData
      : cardData.filter(card => card.category === activeCategory);

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

        {/* Tabs */}
        <div className="text-center mb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`btn btn-sm mx-1 ${activeCategory === cat ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="row">
          {filteredCards.map((card, index) => {
            const shortText = card.description.slice(0, 80) + "...";
            const isExpanded = expandedCard === index;

            return (
              <div className="col-lg-4 mb-5" key={index}>
                <div className="card h-100 shadow">
                  <div className="position-relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="card-img-top"
                      style={{ height: '280px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
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
                  <div className="card-body">
                    <h6 className="card-title">{card.title}</h6>
                    <p className="card-text">
                      {isExpanded ? card.description : shortText}
                    </p>
                    {card.description.length > 120 && (
                      <button
                        className="btn btn-sm btn-link p-0"
                        onClick={() => toggleText(index)}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
