"use client"

import { useState, type FormEvent } from "react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { Linkedin, Github, Youtube, Phone, Mail, Calendar, MessageCircle } from "lucide-react"

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Thank you for contacting me. I’ll get back to you soon.")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        toast.error("Failed to send message. Try again.")
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10 md:mt-20">
        <div className="text-center mb-10 md:mb-20">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">Contact Me</h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto">
            Whether it’s a new project, consultation, or just a question — I’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt">
          <div               className=" bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 px-3 py-8 md:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Let's work together!</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                  className="bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                />
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                  className="w-full bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
              >
                <option className="text-gray-500" value="">Choose Service</option>
                <option>Full Stack Web Development</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>API Development</option>
                <option>DevOps</option>
                <option>Agentic AI Solutions</option>
                <option>Consultation</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                  className="w-full bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info + Social + Calendly */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-4">Contact Details</h4>
            <p className="text-gray-300 mb-8">
              Reach out for web development, DevOps, or AI-based projects.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-purple-500" size={20} />
                <a href="https://wa.me/923256234131" className="hover:text-purple-400 transition">
                  +92 325 6234131
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-purple-500" size={20} />
                <a href="mailto:ahadcommit@gmail.com" className="hover:text-purple-400 transition">
                  ahadcommit@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <p className="text-gray-300 mt-10 mb-4">Connect with me:</p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, link: "https://www.linkedin.com/in/ahadali-webmaestro" },
                { icon: Github, link: "https://github.com/ahadali0500" },
                { icon: MessageCircle, link: "https://wa.me/923256234131" },
                { icon: Youtube, link: "https://www.youtube.com/@ahadcommit" },
              ].map(({ icon: Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Calendly CTA */}
            <div className="mt-10">
              <h6 className="text-white font-semibold mb-3">Prefer a quick chat?</h6>
              <motion.a
                href="https://calendly.com/ahadcommit/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  y: [0, -2, 0],
                  transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Calendar size={18} className="text-white" />
                Book a Call
              </motion.a>
              <p className="text-gray-400 text-sm mt-3">
                Schedule a 15–30 min meeting at your convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
