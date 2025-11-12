import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Services from '../component/Services'
import type { Metadata } from "next";
import Skill from '../component/Skill';

export const metadata = {
  title: {
    default: "Technical Skills & Core Expertise — Ahad Ali ",
    template: "%s | Ahad Ali"
  },
  description: "Key skills of Ahad Ali, a software developer skilled in full-stack development, cloud systems, and automation for scalable, high-performance apps.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/skills`,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}/skills`),
  openGraph: {
    title: "Technical Skills & Core Expertise — Ahad Ali ",
    description: "Key skills of Ahad Ali, a software developer skilled in full-stack development, cloud systems, and automation for scalable, high-performance apps.",
    url: `${process.env.NEXT_PUBLIC_URL}/skills`,
    siteName: "Ahad Commit",
    locale: "en_US",
    type: "website"
  }
};

export default function page() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Skill></Skill>
      </main>
      <Footer></Footer>
    </div>
  )
}
