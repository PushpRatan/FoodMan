// import { Outlet } from "react-router-dom";

import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] m-3">
      <h1
        className="p-3 text-xl font-semibold cursor-pointer w-fit"
        onClick={() => {
          setIsVisible();
        }}
      >
        {title}
      </h1>
      {isVisible && <p className="px-3 pb-3">{desc}</p>}
    </div>
  );
};

const About = () => {
  const [visibleSec, setVisibleSec] = useState("");
  return (
    <>
      <Section
        title={"About Me"}
        desc={
          "I am Pushp Ratan. A trained full stack developer with ReactJs, Java, JavaScript, Spring Boot, and MySQL"
        }
        isVisible={visibleSec === "about"}
        setIsVisible={() => {
          visibleSec === "about" ? setVisibleSec("") : setVisibleSec("about");
        }}
      />

      <Section
        title={"My Education"}
        desc={
          "Passed out from Heritage Institute of Technology, Kolkata in 2023."
        }
        isVisible={visibleSec === "education"}
        setIsVisible={() => {
          visibleSec === "education"
            ? setVisibleSec("")
            : setVisibleSec("education");
        }}
      />

      <Section
        title={"Experience"}
        desc={
          "Completed two internships in techmihirnaik and softrate chennai. Built A resume builder and a Vaacination booking System."
        }
        isVisible={visibleSec === "experience"}
        setIsVisible={() => {
          visibleSec === "experience"
            ? setVisibleSec("")
            : setVisibleSec("experience");
        }}
      />
    </>
    /*
     * <About Me />
     * <About my education />
     * <About My work />
     *
     *
     *
     */
  );
};
export default About;
