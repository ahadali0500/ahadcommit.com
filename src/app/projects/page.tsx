import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Project from "../component/Project";
import Contact from "../component/Contact";
import type { Metadata } from "next";

export const metadata = {
  title: {
    default: "Scalable & Cloud-Ready Web Projects — Ahad Ali",
    template: "%s | Ahad Ali"
  },
  description: "Explore projects by Ahad Ali, a software developer crafting scalable, AI-enhanced, and cloud-ready web applications built for speed, reliability, and growth.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/projects`,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}/projects`),
  openGraph: {
    title: "Scalable & Cloud-Ready Web Projects — Ahad Ali",
    description: "Explore projects by Ahad Ali, a software developer crafting scalable, AI-enhanced, and cloud-ready web applications built for speed, reliability, and growth.",
    url: `${process.env.NEXT_PUBLIC_URL}/projects`,
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
