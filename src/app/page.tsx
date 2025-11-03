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

export const metadata = {
  title: {
    default: "Ahad Ali – Full Stack Dev | DevOps Engineer & Agentic AI",
    template: "%s | Ahad Ali"
  },
  description: "Experienced Full Stack Developer, DevOps Engineer & Agentic AI expert building scalable systems and AI solutions for real-world business challenges.",
  metadataBase: new URL("https://ahadcommit.com/"),
  openGraph: {
    title: "Ahad Ali – Full Stack Dev | DevOps Engineer & Agentic AI",
    description: "Experienced Full Stack Developer, DevOps Engineer & Agentic AI expert building scalable systems and AI solutions for real-world business challenges.",
    url: "https://ahadcommit.com",
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
        {/* <h1 className="text-3xl text-amber-400 font-bold underline">
          Hello world!
        </h1> */}
        <Main></Main>
        {/* <Services></Services> */}
        <Project></Project>

        <Experience educationExperience={educationExperience} workExperience={workExperience}></Experience>
        <Skill></Skill>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}
