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
import Scrollreveal from "scrollreveal";

function App() {
  useEffect(() => {
    /**  Change active link */
    const sections = document.querySelectorAll("section[id]");
    console.log(sections)
    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
          //console.log("inside" + sectionId);
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/**  scrollreveal */
const sr = Scrollreveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

//feature box
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100});
sr.reveal(".featured-text-info", { delay: 200});
sr.reveal(".featured-text-btn", { delay: 200});
sr.reveal(".social_icon", { delay: 200});
sr.reveal(".featured-image", { delay: 200});

//Project Box
sr.reveal(".project-box", { interval: 200});

//Heading
sr.reveal(".top-header", {});

//Left-right animations
const srLeft = Scrollreveal({
  origin: "left" ,
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 200});
srLeft.reveal(".contact-info", { delay: 100});

const srRight = Scrollreveal({
  origin: "right" ,
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100});
srRight.reveal(".form-control", { delay: 100});
/** Type effect */
const typingEffect = new Typed(".typedText", {
  strings: [" Freelance", "Devsecops", "Font-End", "Back-End"],
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
