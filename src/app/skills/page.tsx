import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Services from '../component/Services'
import type { Metadata } from "next";
import Skill from '../component/Skill';


const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ahad Ali",
  "url": "https://ahadcommit.com/skills",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ahadcommit.com/skills"
  },
  "skills": "Full Stack Web Development, Cloud Infrastructure, DevOps, AI Automation",
  "knowsAbout": ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "React", "Node.js", "Express.js", "php", "laravel", "Python", "FastApi", "REST APIs", "GraphQL", "AWS", "AWS Lambda", "S3", "EC2", "RDS", "Docker", "Kubernetes", "CI/CD", "Git", "Github", "Jenkins", "Bitbucket", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Nginx", "Terraform", "Anisble", "Python", "HuggingFace Transformers", "LLM Fine-Tuning", "RAG (Retrieval-Augmented Generation)", "LangChain", "OpenAI API", "Prompt Engineering", "ChatGPT Plugins", "Vector Databases", "Weaviate", "Pinecone", "Haystack", "NLP"],
}

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
  },
  other: {
    "application/ld+json": JSON.stringify(schemaData),
  },
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
