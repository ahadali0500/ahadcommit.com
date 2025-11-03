"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Send } from "lucide-react"
import { Button } from "@/app/component/ui/button"
import { Input } from "@/app/component/ui/input"
import { Textarea } from "@/app/component/ui/textarea"
import { Card } from "@/app/component/ui/card"

// Hero Carousel Component
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      headline: "Transform Your Business with Custom-Built Web Solutions",
      subheadline: "Scalable, modern websites that drive real results",
    },
    {
      headline: "Modern, Scalable Websites Designed to Grow With You",
      subheadline: "Built with the latest technologies and best practices",
    },
    {
      headline: "From Concept to Deployment — We Build Fast, Secure, and Beautiful Products",
      subheadline: "Your vision, our expertise, unlimited possibilities",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Slide content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-6 z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">{slides[currentSlide].headline}</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">{slides[currentSlide].subheadline}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg glow-effect"
            >
              Get a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-6 text-lg rounded-lg bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition ${idx === currentSlide ? "bg-purple-500 w-8" : "bg-white/30 w-2"}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-12 z-20 animate-bounce">
        <div className="text-white/50 text-sm">Scroll to explore</div>
      </div>
    </div>
  )
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: "Custom Web Apps",
      description: "Tailored software solutions built specifically for your business needs",
      icon: "⚙️",
    },
    {
      title: "E-commerce Platforms",
      description: "High-performance online stores optimized for conversions and growth",
      icon: "🛍️",
    },
    {
      title: "Corporate Websites",
      description: "Professional, brand-focused sites that establish your market presence",
      icon: "🏢",
    },
    {
      title: "Landing Pages",
      description: "Conversion-optimized pages designed to capture leads and drive sales",
      icon: "🎯",
    },
  ]

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-4 text-center">What We Build</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Comprehensive web solutions tailored to your business goals
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 hover:border-purple-500/50 p-6 rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Modern Tech Stack",
      description: "Next.js, Tailwind, Node.js, and cutting-edge tools",
      icon: "🚀",
    },
    {
      title: "Agile Process",
      description: "Rapid development with rigorous quality assurance",
      icon: "⚡",
    },
    {
      title: "Scalable & Secure",
      description: "Built to handle real-world growth and security demands",
      icon: "🔒",
    },
  ]

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Why Businesses Choose Emergi Tech Solutions</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="text-center">
              <div className="text-6xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Projects Carousel
function ProjectsCarousel() {
  const [currentProject, setCurrentProject] = useState(0)
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      stack: ["Next.js", "Prisma", "Tailwind", "Stripe"],
      image: "/ecommerce-platform.jpg",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard with real-time data visualization and reporting",
      stack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      image: "/saas-dashboard.jpg",
    },
    {
      title: "Mobile App Backend",
      description: "Scalable API backend for iOS and Android applications",
      stack: ["Node.js", "Express", "MongoDB", "AWS"],
      image: "/mobile-backend.jpg",
    },
  ]

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length)
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Our Recent Projects</h2>

        <div className="relative">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="flex items-center">
                <img
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">{projects[currentProject].title}</h3>
                <p className="text-gray-400 text-lg mb-6">{projects[currentProject].description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentProject].stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-fit">View Case Study</Button>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button
            onClick={prevProject}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextProject}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Project indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentProject(idx)}
                className={`h-2 rounded-full transition ${
                  idx === currentProject ? "bg-purple-500 w-8" : "bg-white/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Carousel
function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      review:
        "Emergi Tech Solutions transformed our vision into reality. Their team is professional, responsive, and delivered beyond expectations.",
      rating: 5,
      avatar: "/diverse-group-avatars.png",
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      review:
        "The platform they built increased our sales by 300%. Highly recommend their services to any business looking to scale.",
      rating: 5,
      avatar: "/pandoran-bioluminescent-forest.png",
    },
    {
      name: "Emma Rodriguez",
      company: "Digital Marketing Co",
      review:
        "Outstanding quality and attention to detail. They understood our needs and delivered a solution that exceeded our expectations.",
      rating: 5,
      avatar: "/diverse-group-avatars.png",
    },
  ]

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">What Our Clients Say</h2>

        <div className="relative">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-500/20 p-12 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h4 className="text-xl font-semibold text-white">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-300 text-lg mb-8 italic">"{testimonials[currentTestimonial].review}"</p>
          </Card>

          {/* Carousel controls */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`h-2 rounded-full transition ${
                  idx === currentTestimonial ? "bg-purple-500 w-8" : "bg-white/30 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Consultation CTA Section
function ConsultationCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
        <p className="text-xl text-purple-100 mb-8">
          Get a free 30-minute consultation with our senior developer team.
        </p>
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-lg font-semibold glow-effect"
        >
          Book a Free Call
        </Button>
      </div>
    </section>
  )
}

// Contact Form Section
function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <p className="text-white text-lg">hello@emergitech.com</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Phone</p>
                <p className="text-white text-lg">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Office Location</p>
                <p className="text-white text-lg">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Working Hours</p>
                <p className="text-white text-lg">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white placeholder-gray-500"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white placeholder-gray-500"
              required
            />
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2"
              required
            >
              <option value="">Select Project Type</option>
              <option value="web-app">Custom Web App</option>
              <option value="ecommerce">E-commerce Platform</option>
              <option value="corporate">Corporate Website</option>
              <option value="landing">Landing Page</option>
            </select>
            <Textarea
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-slate-800 border-slate-700 text-white placeholder-gray-500 min-h-32"
              required
            />
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg rounded-lg font-semibold"
            >
              <Send size={20} className="mr-2" />
              Send Message
            </Button>
            {submitted && (
              <div className="bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-lg text-center">
                Thank you! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0)
  const faqs = [
    {
      question: "How long does it take to build a custom website?",
      answer:
        "Project timelines vary based on complexity and scope. Typically, a custom web application takes 8-16 weeks from concept to launch. We provide detailed timelines during the consultation phase.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We specialize in modern tech stacks including Next.js, React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, and cloud platforms like AWS and Vercel. We choose the best tools for each project.",
    },
    {
      question: "Do you offer maintenance after launch?",
      answer:
        "Yes! We offer comprehensive maintenance and support packages including bug fixes, updates, performance optimization, and feature enhancements.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile development process with regular sprints, client communication, and iterative improvements. You'll have visibility throughout the entire project.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-500/50 transition"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-700/50 transition"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <span className={`text-purple-400 transition ${openFAQ === idx ? "rotate-180" : ""}`}>▼</span>
              </button>
              {openFAQ === idx && <div className="px-6 pb-6 text-gray-400 border-t border-slate-700">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Emergi Tech</h3>
            <p className="text-gray-400">Building the future, one line of code at a time.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Consulting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <p>© 2025 Emergi Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function EmergiLandingPage() {
  return (
    <main className="bg-slate-900">
      <HeroCarousel />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsCarousel />
      <TestimonialsCarousel />
      <ConsultationCTA />
      <ContactFormSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
