import React from "react";
import { NavLink } from "react-router-dom";

const IntroButton = () => {
  return (
    <div className="intro-btn">
      <NavLink to="/contact">
        <button data-aos="flip-left" className="hire-btn m-2">Hire Me</button>
      </NavLink>
      <a href="/Portofolio/Assets/updated-CV.pdf" download>
        <button data-aos="flip-right" className="resume-btn m-2">My Resume</button>
      </a>
    </div>
  );
};

export default IntroButton;
