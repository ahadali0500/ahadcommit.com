'use client'
import Link from 'next/link';
import React, { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('web-development'); // Default active tab

  const serviceCategories = {
    'web-development': {
      title: 'Web Development',
      description: 'Full-stack web applications, APIs, and responsive frontend development',
      icon: '</>'
    },
    'devops': {
      title: 'DevOps',
      description: 'CI/CD, cloud deployment, containerization, and infrastructure automation',
      icon: '⚙️'
    },
    'agentic-ai': {
      title: 'Agentic AI',
      description: 'AI-powered automation, chatbots, and intelligent workflow systems',
      icon: '⊚'
    }
  };

  // Dummy data for services
  const services = [
    {
      number: '01',
      title: 'Custom Web Development',
      description: 'Build highly scalable and responsive web applications using modern technologies.',
      category: 'web-development',
      slug: 'custom-web-development'
    },
    {
      number: '02',
      title: 'API Integration & Development',
      description: 'Seamless integration of third-party services to improve system functionality.',
      category: 'web-development',
      slug: 'api-integration'
    },
    {
      number: '03',
      title: 'CI/CD Automation',
      description: 'Set up automated pipelines for smooth deployment cycles and efficient software development.',
      category: 'devops',
      slug: 'ci-cd-automation'
    },
    {
      number: '04',
      title: 'Cloud Infrastructure Management',
      description: 'Manage and scale infrastructure on cloud platforms like AWS, GCP, and Azure.',
      category: 'devops',
      slug: 'cloud-infrastructure'
    },
    {
      number: '05',
      title: 'AI Chatbot Development',
      description: 'Create intelligent AI chatbots to automate customer service and improve user engagement.',
      category: 'agentic-ai',
      slug: 'ai-chatbot-development'
    },
    {
      number: '06',
      title: 'Workflow Automation',
      description: 'Automate business processes and workflows to improve operational efficiency.',
      category: 'agentic-ai',
      slug: 'workflow-automation'
    }
  ];

  // Filter services based on activeTab
  const filteredServices = services.filter(service => service.category === activeTab);



  return (
    <section className="services-section" id="services">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Quality Services
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web
                project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto text-center mb-5">
            <ul
              className="nav justify-content-center gap-2"
              style={{
                backgroundColor: '#f1ecff',
                borderRadius: '999px',
                padding: '3px 4px 3px 4px',
                display: 'inline-flex',
              }}
            >
              {Object.entries(serviceCategories).map(([key, category]) => (
                <li className="nav-item  text-dark" key={key}>
                  <button
                    onClick={() => setActiveTab(key)}
                    style={{
                      backgroundColor: activeTab === key ? '#7c3aed' : 'transparent',
                      color: activeTab === key ? '#ffffff' : '#4b5563', // Tailwind gray-600
                      padding: '8px 18px',
                      border: 'none',
                      fontSize:'14px',
                      borderRadius: '999px',
                      transition: 'all 0.6s ease',
                      minWidth: '110px',
                    }}
                  >
                    {category.icon} {category.title}
                  </button>
                </li>
              ))}
            </ul>



          </div>
        </div>


        {/* Services List */}
        <div className="row">
          {filteredServices.map((service, index) => (
            <div className="col-lg-12 col-md-6 mb-4 mt-4" key={index}>
              <div
                className="service-item d-flex flex-column justify-content-between wow fadeInUp h-100"
                data-wow-delay={`.${index + 5}s`}
              >
                <div className="left-box d-flex align-items-center mb-3">
                  <span className="number me-3">{service.number}</span>
                  <h5 className="service-title mb-0">
                    {service.title}
                    <Link href={`/services/${service.slug}`} style={{ color: '#8750f7' }} className="btn btn-link">
                      <i className="fa fa-external-link" style={{ marginLeft: '12px' }} aria-hidden="true"></i>
                    </Link>
                  </h5>
                </div>
                <div className="right-box">
                  <p>{service.description}</p>
                </div>
                <i className="flaticon-up-right-arrow" />
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
