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

export const metadata = {
  title: {
    default: "Ahad Ali — Software Developer | Cloud & AI-Powered Web Solutions Expert",
    template: "%s | Ahad Ali"
  },
  description: "Ahad Ali is a software developer specializing in full-stack web development, cloud deployment, and AI-powered automation. He builds scalable, high-performance web apps with DevOps practices and intelligent features that drive modern digital growth.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}`,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  openGraph: {
    title: "Ahad Ali — Software Developer | Cloud & AI-Powered Web Solutions Expert",
    description: "Ahad Ali is a software developer specializing in full-stack web development, cloud deployment, and AI-powered automation. He builds scalable, high-performance web apps with DevOps practices and intelligent features that drive modern digital growth.",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: "Ahad Commit",
    locale: "en_US",
    type: "website"
  }
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
