'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Main from '../component/Main';
import Head from 'next/head';
import toast from "react-hot-toast";

interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<ContactForm>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            toast.success('Thank you for contacting us. We will get back to you shortly.', {
                style: {
                    width: '100%',  // Adjust the width as needed
                    fontSize: '12px',  // Optional: You can also adjust the font size
                    textAlign: 'center',  // Optional: To center the text
                },
            });
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            });
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };


    // Schema for Contact Page
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ahad Ali",
        "jobTitle": "Full Stack Web Developer, DevOps Engineer & Agentic AI Expert",
        "url": "http://ahadcommit.com/",
        "image": "https://ahadcommit.com/assets/img/ahadali.jpg",
        "sameAs": [
            "https://www.linkedin.com/in/ahadali-webmaestro",
            "https://github.com/ahadali0500",
            "https://wa.me/+923256234131"
        ],
        "email": "mailto:ahadali0500@gmail.com",
        "telephone": "+92 325 6234131",
        "description": "Full Stack Web Developer with expertise in Node.js, React, Laravel, and more. Passionate about building scalable and efficient web applications."
    };

    return (
        <>
            <Head>
                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json">
                    {JSON.stringify(personSchema)}
                </script>
            </Head>

            <section className="services-section" id="contact-section">
                <div className="container">
                    <div className="mb-5">
                        <div className="container">
                            <div className="section-header mt-5">
                                <h1 className="section-title">Contact Me</h1>
                                <p>I’m here to assist you whether it's a new project, a consultation, or just a quick question, feel free to reach out!</p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-6 col-md-7 order-2 order-md-1">
                            <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                                <div className="section-header">
                                    <h2 className="section-title">Let’s work together!</h2>
                                </div>
                                <div className="tj-contact-form">
                                    <form onSubmit={handleSubmit} id="contact-form">
                                        <div className="row gx-3">
                                            <div className="col-sm-6">
                                                <div className="form_group">
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        id="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        placeholder="First name"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form_group">
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        id="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        placeholder="Last name"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form_group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="Email address"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form_group">
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="Phone number"
                                                        autoComplete="off"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form_group">
                                                    <select name="service" id="service" value={formData.service}
                                                        onChange={handleChange} required>
                                                        <option value="">Choose Service</option>
                                                        <option>Full Stack Web Development</option>
                                                        <option>Frontend Development</option>
                                                        <option>Backend Development</option>
                                                        <option>API Development</option>
                                                        <option>DevOps</option>
                                                        <option>Agentic AI Solutions</option>
                                                        <option>Consultation</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form_group">
                                                    <textarea
                                                        name="message"
                                                        id="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Message"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form_btn">
                                                    <button type="submit" className="btn tj-btn-primary">
                                                        {loading ? 'Sending...' : 'Send Message'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 offset-lg-1 col-md-5 d-flex flex-column align-items-start order-1 order-md-2">
                            <div className="contact-info-list">
                                <h4 className="contact-info-header">Contact Details</h4>
                                <p>
                                    Feel free to get in touch with me for full-stack web development, DevOps solutions, or Agentic AI projects. I’m also available for consultation and guidance on new projects, collaborations, or technical inquiries.
                                </p>

                                {/* Contact Details */}
                                <div className=" wow fadeInRight" data-wow-delay=".4s">
                                    <div className="text-box mt-5">
                                        <h6>Phone</h6>
                                        <a href="https://wa.me/923256234131" className="contact-link">+92 325 6234131</a>
                                    </div>
                                </div>
                                <div className=" wow fadeInRight" data-wow-delay=".5s">
                                    <div className="text-box mt-4">
                                        <h6>Email</h6>
                                        <a href="mailto:ahadcommit@gmail.com" className="contact-link">ahadcommit@gmail.com</a>
                                    </div>
                                </div>

                                <p className='mt-5' >If you prefer, you can also connect with me via:</p>
                                <div className="social-media-links" style={{ display: 'flex', gap: '20px' }}>
                                    <a className="social-iconsss" href="https://www.linkedin.com/in/ahadali-webmaestro" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </a>
                                    <a className="social-iconsss" href="https://github.com/ahadali0500" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github" />
                                    </a>
                                    <a className="social-iconsss" href="https://wa.me/+923256234131" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-whatsapp" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            {successMessage && (
                <div className="modal show" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="modal-title">
                                    <strong>Message Sent Successfully</strong>
                                </span>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{successMessage}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Error Modal */}
            {error && (
                <div className="modal show failed" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="modal-title">
                                    <strong>Error</strong>
                                </span>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{error}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
