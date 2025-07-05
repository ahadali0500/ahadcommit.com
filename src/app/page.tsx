import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Services from "./component/Services";
import Project from "./component/Project";
import Experience from "./component/Experience";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Main from "./component/Main";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
      <Main></Main>
             <Services></Services>
      <Project></Project>

       <Experience></Experience>
        <Skill></Skill>
       <Contact></Contact>
     
      </main>
      <Footer></Footer>
    </>
  );
}
