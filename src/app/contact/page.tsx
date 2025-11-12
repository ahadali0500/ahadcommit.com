import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Experience from '../component/Experience';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ahad Ali",
  "url": "https://ahadcommit.com",
  "logo": "https://ahadcommit.com/assets/img/Ahad Ali Software Developer.jpg",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+92 325 6234131",
      "contactType": "WhatsApp / General Inquiries",
      "areaServed": "PK",
      "availableLanguage": ["English"]
    },
    {
      "@type": "ContactPoint",
      "email": "ahadcommit@gmail.com",
      "contactType": "Email",
      "availableLanguage": ["English"]
    }
  ]
}

export const metadata = {
  title: {
    default: "Get in Touch with Ahad Ali — Software Developer & DevOps Expert",
    template: "%s | Ahad Ali"
  },
  description: "Get in touch with Ahad Ali, a software developer and DevOps engineer specializing in scalable, AI-powered web solutions. Schedule a call or drop a message to discuss your project, collaboration, or technical idea.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/contact`,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}/contact`),
  openGraph: {
    title: "Get in Touch with Ahad Ali — Software Developer & DevOps Expert",
    description: "Get in touch with Ahad Ali, a software developer and DevOps engineer specializing in scalable, AI-powered web solutions. Schedule a call or drop a message to discuss your project, collaboration, or technical idea.",
    url: `${process.env.NEXT_PUBLIC_URL}/contact`,
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
    <>
      <Navbar></Navbar>
      <main>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}
