import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import AboutMe from "./components/aboutme";
import Skill from "./components/skills";
import Experience from "./components/experience";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";
import Portfolio from "./components/portfolio"
import Certificates from "./components/certificates";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Banner />
      <AboutMe />
      <Skill />
      <Portfolio/>
      <Experience />
      <Certificates />
      <ContactMe />
      <Footer/>
    </>
  );
}

export default App;
