"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Code2, Zap, Cloud, Star, ExternalLink, Linkedin, Github, Twitter, Mail } from "lucide-react"

export default function EmergiLanding() {
    const [scrollY, setScrollY] = useState(0)
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const services = [
        {
            icon: Code2,
            title: "Web Development",
            description: "Modern, scalable websites using Next.js, Tailwind, and React.",
            features: ["Next.js & React", "Tailwind CSS", "TypeScript", "Responsive Design"],
        },
        {
            icon: Zap,
            title: "AI Agents & Automation",
            description: "Custom AI automations using OpenAI, LangChain, and n8n.",
            features: ["OpenAI Integration", "LangChain", "n8n Workflows", "Custom Agents"],
        },
        {
            icon: Cloud,
            title: "DevOps Solutions",
            description: "Reliable CI/CD pipelines and scalable cloud deployment.",
            features: ["CI/CD Pipelines", "Cloud Deployment", "Docker & K8s", "Monitoring"],
        },
    ]

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with AI-powered recommendations",
            image: "/web-development-dashboard.png",
            tags: ["Next.js", "AI", "Stripe"],
        },
        {
            title: "AI Chatbot System",
            description: "Intelligent customer support automation with natural language processing",
            image: "/real-time-chat-application.jpg",
            tags: ["OpenAI", "LangChain", "n8n"],
        },
        {
            title: "Cloud Infrastructure",
            description: "Scalable deployment pipeline with automated monitoring",
            image: "/cloud-infrastructure.png",
            tags: ["Docker", "Kubernetes", "CI/CD"],
        },
        {
            title: "Progressive Web App",
            description: "Offline-first PWA with real-time synchronization",
            image: "/progressive-web-app.png",
            tags: ["PWA", "React", "Service Workers"],
        },
    ]

    const testimonials = [
        {
            quote: "Emergi transformed our entire tech stack. Their AI agents reduced our support costs by 60%.",
            author: "Sarah Chen",
            company: "TechFlow Inc",
            image: "/placeholder-user.jpg",
        },
        {
            quote: "The team delivered a production-ready platform in record time. Exceptional quality and communication.",
            author: "Marcus Johnson",
            company: "InnovateLabs",
            image: "/placeholder-user.jpg",
        },
        {
            quote: "Best investment we made. Their DevOps expertise saved us thousands in infrastructure costs.",
            author: "Elena Rodriguez",
            company: "CloudScale",
            image: "/placeholder-user.jpg",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/50 border-b border-purple-500/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Emergi
                    </div>
                    <div className="hidden md:flex gap-8">
                        <a href="#services" className="text-gray-300 hover:text-white transition">
                            Services
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition">
                            Projects
                        </a>
                        <a href="#testimonials" className="text-gray-300 hover:text-white transition">
                            Testimonials
                        </a>
                    </div>
                    <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition">
                        Contact
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div
                        className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
                        style={{ animationDelay: "1s" }}
                    ></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6 inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                        <span className="text-purple-300 text-sm font-semibold">Welcome to the Future</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Transform Ideas into{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                            Intelligent Digital Products
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        We build modern web experiences and deploy AI-powered agents that help businesses automate and scale.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition transform hover:scale-105">
                            Get a Free Consultation
                        </button>
                        <button className="px-8 py-4 border border-purple-500/50 text-white font-semibold rounded-full hover:bg-purple-500/10 transition flex items-center justify-center gap-2">
                            View Our Work <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
                        <p className="text-gray-400 text-lg">Comprehensive solutions for modern businesses</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, idx) => {
                            const Icon = service.icon
                            return (
                                <div
                                    key={idx}
                                    className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition backdrop-blur-sm hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-slate-900/80"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-purple-600/5 rounded-2xl transition"></div>
                                    <div className="relative z-10">
                                        <Icon className="w-12 h-12 text-purple-400 mb-4" />
                                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                        <p className="text-gray-400 mb-6">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map((feature, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
                        <p className="text-gray-400 text-lg">Showcasing our latest work and innovations</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group relative rounded-2xl overflow-hidden bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/50 transition"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                                </div>
                                <div className="p-6 relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition font-semibold">
                                        View Case Study <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
                        <p className="text-gray-400 text-lg">Trusted by leading companies</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition backdrop-blur-sm"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-purple-400 text-purple-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative p-12 rounded-3xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build the Future?</h2>
                        <p className="text-xl text-gray-300 mb-8">Let's create something extraordinary together.</p>
                        <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition transform hover:scale-105">
                            Book a Free Strategy Call
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-purple-500/10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                                Emergi
                            </div>
                            <p className="text-gray-400">Building the future of tech and AI.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Web Development
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        AI Agents
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        DevOps
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Connect</h4>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-purple-500/10 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Emergi Tech Solutions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
