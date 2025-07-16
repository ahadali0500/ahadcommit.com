import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Services from '../component/Services'
import type { Metadata } from "next";
import Skill from '../component/Skill';

export const metadata = {
  title: {
    default: "Tech Skills in Web Dev, DevOps & Agentic AI – Ahad Ali",
    template: "%s | Ahad Ali"
  },
  description: "Explore Ahad Ali’s key skills: full stack web dev, DevOps, cloud infrastructure, and Agentic AI—mastery in React, Laravel, Node.js, Docker & AWS.",
  metadataBase: new URL("https://ahadcommit.com/skills"),
  openGraph: {
    title: "Tech Skills in Web Dev, DevOps & Agentic AI – Ahad Ali",
    description: "Explore Ahad Ali’s key skills: full stack web dev, DevOps, cloud infrastructure, and Agentic AI—mastery in React, Laravel, Node.js, Docker & AWS.",
    url: "https://ahadcommit.com/skills",
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
        <Skill></Skill>
      </main>
      <Footer></Footer>
    </div>
  )
}
