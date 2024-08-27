import React, { useEffect } from "react";
import "./_home.scss";
import Typical from "react-typical";
import CurveSVG from "../CurveSVG";
import IntroButton from "../IntroButton";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
        disable: "phone",
        duration: 1000,
        easing: "ease-out-cubic",
    });
}, []);
  return (
    <>
      <div className="hero-section px-3 ">
        <div className="intro">
          <div className="profile-details">
            <div className="social-icons">
              <a href="https://omgeniustech.com/">
                <i className="fa fa-chrome"></i>
              </a>
              <a href="https://www.linkedin.com/in/omyadav1234/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/om__yadav__19/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/OmpalSingh79832">
                <i className="fa fa-github"></i>
              </a>
            </div>
            <div data-aos="fade-right" className="intro-text">I'm Ompal Singh</div>
            <div className="skills">
              <Typical
                className="skill-name"
                loop={Infinity}
                steps={[
                  "React Dev",
                  1000,
                  "Front-End Dev",
                  1000,
                  "Enthuastic Programmer",
                  1000,
                  "Web Developer",
                  1000,
                  "SDE-1 at ValueCoders",
                  1000,
                ]}
              />
            </div>
            <IntroButton />
          </div>
        </div>

        <div data-aos="fade-left" className="profile-pic">
          <div className="pic">
            <img src="/Portofolio/Assets/Images/picc.png" alt="Profile Pic" width="100%" />
          </div>
        </div>
      </div>
      <CurveSVG />
    </>
  );
};

export default Home;
