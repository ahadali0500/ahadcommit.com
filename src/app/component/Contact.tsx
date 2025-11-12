"use client"

import { useState, type FormEvent } from "react"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { Linkedin, Github, Youtube, Phone, Mail, Calendar, MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation";

interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

export default function Contact() {
  const pathname = usePathname();
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
        toast.success("Thank you for contacting me. I'll get back to you soon.")
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="bg-slate-950 text-white pt-20">
      <div className={`max-w-6xl mx-auto px-4 md:px-6  ${pathname == "/" ? '' : 'mt-10 md:mt-20'}`}>
        <motion.div
          className="text-center mb-10 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {pathname == "/" ?
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
              variants={itemVariants}
            >
              Let's Connect and Build Something Great
            </motion.h2>
            :
            <motion.h1
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
              variants={itemVariants}
            >
              Let's Connect and Build Something Great
            </motion.h1>
          }

          <motion.p
            className="text-gray-300 text-sm md:text-md lg:text-lg"
            variants={itemVariants}
          >
            Whether you're planning a new web app, need DevOps support, or want to integrate AI features into your existing system — I'd love to hear from you.
            Use the form below to send a quick message or schedule a consultation directly through my Calendly link.
            Let's discuss how we can turn your idea into a scalable, efficient, and future-ready digital solution.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Form Section */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 px-3 py-8 md:px-8"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Let's work together!</h2>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="grid grid-cols-2 gap-4" variants={formFieldVariants}>
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
              </motion.div>

              <motion.div className="grid grid-cols-2 gap-4" variants={formFieldVariants}>
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
              </motion.div>

              <motion.select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                variants={formFieldVariants}
              >
                <option className="text-gray-500" value="">Choose Service</option>
                <option>Full Stack Web Development</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>API Development</option>
                <option>DevOps</option>
                <option>Agentic AI Solutions</option>
                <option>Consultation</option>
              </motion.select>

              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full bg-slate-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
                variants={formFieldVariants}
              />

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50"
                variants={formFieldVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 className="text-2xl font-bold text-white mb-4" variants={itemVariants}>
                Contact Details
              </motion.h2>
              <motion.p className="text-gray-300 mb-8" variants={itemVariants}>
                Reach out for web development, DevOps, or AI-based projects.
              </motion.p>

              <motion.div className="space-y-6" variants={itemVariants}>
                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="text-purple-500" size={20} />
                  <a href="https://wa.me/923256234131" className="hover:text-purple-400 transition">
                    +92 325 6234131
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="text-purple-500" size={20} />
                  <a href="mailto:ahadcommit@gmail.com" className="hover:text-purple-400 transition">
                    ahadcommit@gmail.com
                  </a>
                </motion.div>
              </motion.div>

              {/* Social Icons */}
              <motion.p className="text-gray-300 mt-10 mb-4" variants={itemVariants}>
                Connect with me:
              </motion.p>
              <motion.div
                className="flex gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
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
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Calendly CTA */}
              <motion.div className="mt-10" variants={itemVariants}>
                <h3 className="text-white font-semibold mb-3">Prefer a quick chat?</h3>
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
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}