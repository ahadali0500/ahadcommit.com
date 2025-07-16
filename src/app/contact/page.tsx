import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Project from "../component/Project";
import Contact from "../component/Contact";
import Experience from '../component/Experience';

export const metadata = {
  title: {
    default: "Contact for Web Development, DevOps, and AI Solutions",
    template: "%s | Ahad Ali"
  },
  description: "Get in touch with Ahad Ali for expert web development, DevOps solutions, and AI services. Let's collaborate to bring your projects to life.",
  metadataBase: new URL("https://ahadcommit.com/contact"),
  openGraph: {
    title: "Contact for Web Development, DevOps, and AI Solutions",
    description: "Get in touch with Ahad Ali for expert web development, DevOps solutions, and AI services. Let's collaborate to bring your projects to life.",
    url: "https://ahadcommit.com/contact",
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
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}
