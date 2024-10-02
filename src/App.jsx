import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import FeaturedBox from "./component/FeaturedBox.jsx";
import AboutBox from "./component/AboutBox.jsx";
import ProjectsBox from "./component/ProjectsBox.jsx";
import ContactBox from "./component/ContactBox.jsx";
import { useEffect } from "react";
import Typed from "typed.js";

function App() {
  useEffect(() => {
    const typingEffect = new Typed(".typedText", {
      strings: [" Freelance", "ภาษาไทย"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
