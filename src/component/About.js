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
          "Hi, I am Pushp Ratan, a trained full-stack developer with Acciojobs. I am proficient in MERN Stack development. And Java-Fullstack Development. Currently, I am in the phase of learning Next.js and Typescript to enhance my skills."
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
        desc={`During my internship at Techmihirnaik as a Frontend Developer intern, I
          was part of the team that handled the Frontend and Backend of the
          product: Shopica an e-commerce web application that the company
          was building. I worked in ReactJS and NodeJs. Created user interfaces,
          and identified various bugs like the responsiveness and the component
          alignment, etc. Also added search functionality, and product carousals,
          and also worked on different components of different sections. Added
          product description accordion and also got familiar with test-driven
          development.`}
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
