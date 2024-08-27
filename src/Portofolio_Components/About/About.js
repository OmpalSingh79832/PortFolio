import React, {useEffect} from "react";
import Title from "../Title";
import "./About.scss";
import PhotoGallery from "../PhotoGallery";
import IntroButton from "../IntroButton";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutme = () => {
  useEffect(() => {
    AOS.init({
        disable: "phone",
        duration: 1000,
        easing: "ease-out-cubic",
    });
}, []);
  return (
    <div className="about-me my-5">
      <div data-aos="fade-right">
      <Title title="About Me" subTitle="Why Choose Me?" />
      </div>
      <div className="about-box container my-5">
        <PhotoGallery />
        <div className="bio">
          <div data-aos="fade-left" className="">
            <p className="bio-short">@Om-Coder</p>
            <h1 className="bio-title">
              Front-End Developer | React.Js Developer
            </h1>
            <p className="bio-desc my-3">
              I am Ompal Singh from Uttar Pradesh (India). I have done my Bachelor's Degree in
              the discipline of Computer Science and Engineering in ITM College Aligarh (AKTU)
              with an aggregate of 7.69 CGPA.
            </p>
          </div>
          <div className="highlights">
            <p className="h-title my-4">
              HighLights 🔽
            </p>
            <ul data-aos="fade-right">
              <li>
                I have good command in{" "}
                <span className="bio-highlights">
                  React.js, JavaScript, Next.js, Vue.js, Redux{" "}
                </span>{" "}
                along with the knowledge of{" "}
                <span className="bio-highlights">
                  HTML5, CSS3, Tailwind, Bootstrap, MUI, Node.js, Git and Github
                </span>{" "}
                and Many More...
              </li>
              <li>My hobbies are Singing, Programming, Writing, Travelling.</li>
              <li>
                {" "}
                My strength is positive attitude, Dedication and self
                confidence.{" "}
              </li>
              <li>
                My weakness is I never feel comfortable until I finish off my
                work in time.
              </li>
            </ul>
          </div>
          <IntroButton />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
