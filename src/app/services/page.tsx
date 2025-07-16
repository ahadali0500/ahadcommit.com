import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Services from '../component/Services'
import type { Metadata } from "next";

export const metadata = {
  title: {
    default: "Web Dev, DevOps & Agentic AI Services – Ahad Ali",
    template: "%s | Ahad Ali"
  },
  description: "Offering full stack web development, DevOps, and Agentic AI solutions tailored to scale businesses with modern, efficient, and intelligent technologies",
  metadataBase: new URL("https://ahadcommit.com/services"),
  openGraph: {
    title: "Web Dev, DevOps & Agentic AI Services – Ahad Ali",
    description: "Offering full stack web development, DevOps, and Agentic AI solutions tailored to scale businesses with modern, efficient, and intelligent technologies",
    url: "https://ahadcommit.com/services",
    siteName: "Ahad Commit",
    locale: "en_US",
    type: "website"
  }
};

export default function page() {
  return (
    <div>
      <Navbar></Navbar>
      <main  >
        <Services></Services>
      </main>
      <Footer></Footer>
    </div>
  )
}
