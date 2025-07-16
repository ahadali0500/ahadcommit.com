import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Project from "../component/Project";
import Contact from "../component/Contact";
import type { Metadata } from "next";

export const metadata = {
  title: {
    default: "Ahad Ali Projects - Web Dev, DevOps & Agentic AI",
    template: "%s | Ahad Ali"
  },
  description: "Explore the Projects of Ahad Ali, showcasing web development, DevOps, and Agentic AI projects. See how I create innovative solutions for real-world challenges.",
  metadataBase: new URL("https://ahadcommit.com/project"),
  openGraph: {
    title: "Ahad Ali Projects - Web Dev, DevOps & Agentic AI",
    description: "Explore the Projects of Ahad Ali, showcasing web development, DevOps, and Agentic AI projects. See how I create innovative solutions for real-world challenges.",
    url: "https://ahadcommit.com/project",
    siteName: "Ahad Commit",
    locale: "en_US",
    type: "website"
  }
};

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Project></Project>
      </main>
      <Footer></Footer>
    </>
  );
}
