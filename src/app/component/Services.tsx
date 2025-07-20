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
    // 'agentic-ai': {
    //   title: 'Agentic AI',
    //   description: 'AI-powered automation, chatbots, and intelligent workflow systems',
    //   icon: '⊚'
    // }
  };

  // Dummy data for services
  const services = [
    {
      number: 1,
      title: 'Custom Web Development',
      description: 'Build custom, scalable, and responsive web applications using modern technologies like React, Next.js, and Node.js to ensure optimal performance and user experience.',
      category: 'web-development',
      slug: 'custom-web-development'
    },
    {
      number: 2,
      title: 'Real-Time Applications',
      description: 'Develop real-time, interactive chat applications using **WebSockets** or **Socket.io**, enabling live communication for users in a secure environment. Ideal for customer support, team collaboration, or social messaging apps.',
      category: 'web-development',
      slug: 'real-time-chat-applications'
    },
    {
      number: 3,
      title: 'Progressive Web App Development',
      description: 'Develop high-performance Progressive Web Apps (PWAs) for fast, reliable, and engaging mobile experiences without the need for installation.',
      category: 'web-development',
      slug: 'pwa-development'
    },
    {
      number: 4,
      title: 'Website Redesign & Optimization',
      description: 'Revamp outdated websites with modern designs, improved functionality, and optimized load speeds to increase user engagement and SEO rankings.',
      category: 'web-development',
      slug: 'website-redesign'
    },
    {
      number: 5,
      title: 'Content Management System (CMS) Development',
      description: 'Custom CMS development with WordPress, Drupal, or Joomla to empower businesses to manage and update content seamlessly.',
      category: 'web-development',
      slug: 'cms-development'
    },
    {
      number: 6,
      title: 'Custom API Development & Integration',
      description: 'Create robust and scalable **RESTful APIs** and integrate third-party services to improve system functionality. Whether its integrating payment gateways, social media APIs, or other external services, we provide secure and efficient solutions.',
      category: 'web-development',
      slug: 'api-development-integration'
    },
    {
      number: 1,
      title: 'CI/CD Automation',
      description: 'Set up automated pipelines for continuous integration and continuous delivery to streamline testing, building, and deploying software.',
      category: 'devops',
      slug: 'ci-cd-automation'
    },
    {
      number: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Manage and scale infrastructure using cloud platforms like AWS, GCP, and Azure to ensure reliability and cost-efficiency.',
      category: 'devops',
      slug: 'cloud-infrastructure'
    },
    {
      number: 3,
      title: 'Docker & Kubernetes Orchestration',
      description: 'Automate container deployment, scaling, and management using Docker and Kubernetes for seamless orchestration.',
      category: 'devops',
      slug: 'docker-kubernetes-orchestration'
    },
    {
      number: 4,
      title: 'Monitoring & Logging Setup',
      description: 'Implement tools like Prometheus and Grafana to monitor infrastructure and applications for improved performance and reliability.',
      category: 'devops',
      slug: 'monitoring-logging'
    },
    {
      number: 5,
      title: 'Automation & Scripting',
      description: 'Automate DevOps tasks with custom Bash or Python scripts to enhance workflow efficiency and reduce human errors.',
      category: 'devops',
      slug: 'automation-scripting'
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
                      fontSize: '14px',
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
