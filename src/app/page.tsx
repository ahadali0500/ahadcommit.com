import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Services from "./component/Services";
import Project from "./component/Project";
import Experience from "./component/Experience";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Main from "./component/Main";
import type { Metadata } from "next";
import { educationExperience, workExperience } from '@/app/data/experience'
import ReviewsSection from "./component/ReviewsSection";
import Aboutus from "./component/Aboutus";
import VideoPlayer from "./component/VideoPlayer";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ahad Ali",
  "alternateName": "ahadcommit",
  "url": "https://ahadcommit.com",
  "image": "https://ahadcommit.com/assets/img/Ahad Ali Software Developer.jpg",
  "description": "Ahad Ali is a software developer specializing in scalable web apps, cloud deployment, and AI automation. He builds high-performance solutions with modern DevOps practices.",
  "jobTitle": "Software Developer | Cloud & AI-Powered Web Solutions Expert  | DevOps Specialist",
  "worksFor": {
    "@type": "Organization",
    "name": "Emergi Mentors"
  },
  "knowsAbout": ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "React", "Node.js", "Express.js", "php", "laravel", "Python", "FastApi", "REST APIs", "GraphQL", "AWS", "AWS Lambda", "S3", "EC2", "RDS", "Docker", "Kubernetes", "CI/CD", "Git", "Github", "Jenkins", "Bitbucket", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Nginx", "Terraform", "Anisble", "Python", "HuggingFace Transformers", "LLM Fine-Tuning", "RAG (Retrieval-Augmented Generation)", "LangChain", "OpenAI API", "Prompt Engineering", "ChatGPT Plugins", "Vector Databases", "Weaviate", "Pinecone", "Haystack", "NLP"],
  "skills": "Full Stack Web Development, Cloud Infrastructure, DevOps, AI Automation",
  "sameAs": [
    "https://github.com/ahadali0500",
    "https://www.linkedin.com/in/ahadcommit/",
    "https://www.youtube.com/@ahadcommit",
    "https://wa.me/923256234131",

  ],
  "email": "mailto:ahadcommit@gmail.com",
  "nationality": "Pakistani",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ahadcommit.com"
  }
};

export const metadata = {
  title: {
    default: "Ahad Ali Software Developer | Cloud & AI-Powered Web Solutions Expert",
    template: "%s | Ahad Ali"
  },
  description: "Ahad Ali is a software developer specializing in full-stack web development, cloud deployment, and AI-powered automation. He builds scalable, high-performance web apps with DevOps practices and intelligent features that drive modern digital growth.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}`,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  openGraph: {
    title: "Ahad Ali Software Developer | Cloud & AI-Powered Web Solutions Expert",
    description: "Ahad Ali is a software developer specializing in full-stack web development, cloud deployment, and AI-powered automation. He builds scalable, high-performance web apps with DevOps practices and intelligent features that drive modern digital growth.",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: "Ahad Commit",
    locale: "en_US",
    type: "website"
  },
  other: {
    "application/ld+json": JSON.stringify(schemaData),
  },
};



export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Main></Main>
        <Experience educationExperience={educationExperience} workExperience={workExperience} certifications={[]} active="experience" ></Experience>
        <Project title="My Featured Projects" page="home" ></Project>
        <Skill></Skill>
        <ReviewsSection></ReviewsSection>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}
