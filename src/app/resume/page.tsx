
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Dataa from '@/app/resume/Data';
import type { Metadata } from "next";
import Head from 'next/head';

export const metadata = {
  title: {
    default: "Ahad Ali Resume - Web Dev, DevOps & Agentic AI",
    template: "%s | Ahad Ali"
  },
  description: "Explore the resume of Ahad Ali, a Full Stack Developer specializing in Web Development, DevOps, and Agentic AI. Discover his skills, experience, and projects.",
  metadataBase: new URL("https://ahadcommit.com/resume"),
  openGraph: {
    title: "Ahad Ali Resume - Web Dev, DevOps & Agentic AI",
    description: "Explore the resume of Ahad Ali, a Full Stack Developer specializing in Web Development, DevOps, and Agentic AI. Discover his skills, experience, and projects.",
    url: "https://ahadcommit.com/resume",
    siteName: "Ahad Commit",
    locale: "en_US",
    type: "website"
  }
};

const pdfUrl = "/assets/ahad-ali-resume-full-stack-web-developer.pdf";

// Structured Data (JSON-LD) for Person schema
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ahad Ali",
  "jobTitle": "Ahad Ali - Full Stack Web Developer, DevOps Engineer & Agentic AI Expert",
  "url": "http://ahadcommit.com/",
  "image": "http://ahadcommit.com/assets/img/ahadali.jpg", // Your profile image URL
  "sameAs": [
    "https://www.linkedin.com/in/ahadali-webmaestro/", // LinkedIn URL
    "https://github.com/ahadali0500" // GitHub URL
  ],
  "resume": pdfUrl, // Link to your resume PDF
  "description": "Ahad Ali - Full Stack Web Developer, DevOps Engineer & Agentic AI Expert"
};

export default function Data() {

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Head>
      <Navbar></Navbar>
      <main>
        <Dataa></Dataa>
      </main>
      <Footer></Footer>
    </>
  );
}