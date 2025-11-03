"use client"
import Link from "next/link"
import { useState } from "react"

export default function Services() {
  const [activeTab, setActiveTab] = useState("web-development")

  const serviceCategories = {
    "web-development": { title: "Web Development", icon: "</>" },
    devops: { title: "DevOps", icon: "⚙️" },
  }

  const services = [
    {
      number: 1,
      title: "Custom Web Development",
      description:
        "Build custom, scalable, and responsive web applications using modern technologies like React, Next.js, and Node.js to ensure optimal performance and user experience.",
      category: "web-development",
      slug: "custom-web-development",
    },
    {
      number: 2,
      title: "Real-Time Applications",
      description:
        "Develop real-time, interactive chat applications using WebSockets or Socket.io, enabling live communication for users in a secure environment.",
      category: "web-development",
      slug: "real-time-chat-applications",
    },
    {
      number: 3,
      title: "Progressive Web App Development",
      description:
        "Develop high-performance Progressive Web Apps (PWAs) for fast, reliable, and engaging mobile experiences without the need for installation.",
      category: "web-development",
      slug: "pwa-development",
    },
    {
      number: 4,
      title: "Website Redesign & Optimization",
      description:
        "Revamp outdated websites with modern designs, improved functionality, and optimized load speeds to increase user engagement and SEO rankings.",
      category: "web-development",
      slug: "website-redesign",
    },
    {
      number: 5,
      title: "Content Management System (CMS) Development",
      description:
        "Custom CMS development with WordPress, Drupal, or Joomla to empower businesses to manage and update content seamlessly.",
      category: "web-development",
      slug: "cms-development",
    },
    {
      number: 6,
      title: "Custom API Development & Integration",
      description:
        "Create robust and scalable RESTful APIs and integrate third-party services to improve system functionality.",
      category: "web-development",
      slug: "api-development-integration",
    },
    {
      number: 1,
      title: "CI/CD Automation",
      description:
        "Set up automated pipelines for continuous integration and continuous delivery to streamline testing, building, and deploying software.",
      category: "devops",
      slug: "ci-cd-automation",
    },
    {
      number: 2,
      title: "Cloud Infrastructure Management",
      description:
        "Manage and scale infrastructure using cloud platforms like AWS, GCP, and Azure to ensure reliability and cost-efficiency.",
      category: "devops",
      slug: "cloud-infrastructure",
    },
    {
      number: 3,
      title: "Docker & Kubernetes Orchestration",
      description:
        "Automate container deployment, scaling, and management using Docker and Kubernetes for seamless orchestration.",
      category: "devops",
      slug: "docker-kubernetes-orchestration",
    },
    {
      number: 4,
      title: "Monitoring & Logging Setup",
      description:
        "Implement tools like Prometheus and Grafana to monitor infrastructure and applications for improved performance and reliability.",
      category: "devops",
      slug: "monitoring-logging",
    },
    {
      number: 5,
      title: "Automation & Scripting",
      description:
        "Automate DevOps tasks with custom Bash or Python scripts to enhance workflow efficiency and reduce human errors.",
      category: "devops",
      slug: "automation-scripting",
    },
  ]

  const filteredServices = services.filter((service) => service.category === activeTab)

  return (
    <section className="py-32 bg-[#050709]" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Quality Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your
            customers.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-3 bg-purple-100 rounded-full p-1">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key ? "bg-purple-600 text-white" : "bg-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                {category.icon} {category.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="border-b border-purple-900 py-6 px-6 hover:bg-purple-900 hover:bg-opacity-20 transition-all duration-300 group relative"
            >
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-purple-500 min-w-fit">{service.number}</span>
                <div className="flex-1">
                  <h5 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {service.title}
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-purple-500 hover:text-purple-400 transition"
                    >
                      <i className="fa fa-external-link text-sm" />
                    </Link>
                  </h5>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
