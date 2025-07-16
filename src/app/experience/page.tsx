import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Services from '../component/Services'
import type { Metadata } from "next";
import Skill from '../component/Skill';
import Experience from '../component/Experience';
import Head from 'next/head';
import { educationExperience, workExperience } from '@/app/data/experience'
export const metadata = {
  title: {
    default: "Experience & Education in Web Dev, DevOps & AI – Ahad Ali",
    template: "%s | Ahad Ali"
  },
  description: "Explore Ahad Ali’s journey—leading full stack web projects, deploying scalable DevOps pipelines, and building AI-driven platforms for startups and enterprises.",
  metadataBase: new URL("https://ahadcommit.com/experience"),
  openGraph: {
    title: "Experience & Education in Web Dev, DevOps & AI – Ahad Ali",
    description: "Explore Ahad Ali’s journey—leading full stack web projects, deploying scalable DevOps pipelines, and building AI-driven platforms for startups and enterprises.",
    url: "https://ahadcommit.com/experience",
    siteName: "Ahad Commit",
    locale: "en_US",
    type: "website"
  }
};

interface WorkExperienceSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  employee: {
    "@type": string;
    name: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: string;
  };
}

// Define Education Schema Type
interface EducationSchema {
  "@context": string;
  "@type": string;
  name: string;
  educationalCredentialAwarded: string;
  educationalCredentialCategory: string;
  dateAwarded: string;
  description: string;
}



// JSON-LD Schema for work and education
const workSchema: WorkExperienceSchema[] = workExperience.map((exp) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": exp.company,
  "url": exp.link,
  "employee": {
    "@type": "Person",
    "name": exp.title,
    "jobTitle": exp.title,
    "startDate": exp.period.split(' - ')[0],
    "endDate": exp.period.split(' - ')[1] || "Present",
    "description": exp.description,
  },
}));

const educationSchema: EducationSchema[] = educationExperience.map((edu) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalCredential",
  "name": edu.title,
  "educationalCredentialAwarded": edu.title,
  "educationalCredentialCategory": edu.company,
  "dateAwarded": edu.period,
  "description": edu.description,
}));

// Combine both arrays with proper typing
const combinedSchema: (WorkExperienceSchema | EducationSchema)[] = [...workSchema, ...educationSchema];


export default function page() {
  return (
    <div>
      <Head>
        {/* Inject structured data */}
        {combinedSchema.map((schema, idx) => (
          <script key={idx} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Head>
      <Navbar></Navbar>
      <main  >
        <Experience educationExperience={educationExperience} workExperience={workExperience} ></Experience>
      </main>
      <Footer></Footer>
    </div>
  )
}
