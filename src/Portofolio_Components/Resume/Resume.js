import React, { useEffect, useState } from "react";
import "./Resume.scss";
import Title from "../Title";
import ProgressBar from "../ProgressBar";

const Tabs = ({ tabNo }) => {
  // Education Tab
  if (tabNo === "tab-1")
    return (
      <section id={tabNo}>
        <div data-aos="fade-left"  className="tab">
          <h1 className="tab-title my-4 text-center">Education Details 🔽</h1>
          <ul>
            <li>
              <p className="course">Bachelor Of Technology (B.Tech)</p>
              <p className="college">ITM College Aligarh (AKTU Lucknow)</p>
              <p className="date-per">
                <span className="date"> Jul 2019 - Jun 2023</span>{" "}
                <span className="percent"> 7.69 CGPA</span>
              </p>
            </li>

            <li>
              <p className="course">
                Senior Secondary School (PCM)
              </p>
              <p className="college">BRS Inter College Babrala (UP Board)</p>
              <p className="date-per">
                <span className="date"> Apr 2017 - May 2019</span>{" "}
                <span className="percent"> 60 %</span>
              </p>
            </li>
            <li>
              <p className="course">High school</p>
              <p className="college">BRS Inter College Babrala (UP Board)</p>
              <p className="date-per">
                <span className="date"> Apr 2016 - May 2017</span>{" "}
                <span className="percent"> 75 %</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  // Work Tab
  else if (tabNo === "tab-2")
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Work History 🔽</h1>
          <ul>
            <li>
              <p className="course">Technove Global Software Pvt. Ltd.</p>
              <p className="college">Front-End Developer, Noida</p>
              <p className="date-per">
                <span className="date"> Nov 2023 - Present   </span>{" "}
                <span className="percent">
                  <a href="https://technove.co.in/" target="_blank">
                    Visit Company...
                  </a>
                </span>
              </p>
            </li>
            <li>
              <p className="course">Maya Web Technology</p>
              <p className="college">Web Developer, Noida</p>
              <p className="date-per">
                <span className="date"> May2023 - Oct2023  </span>{" "}
                <span className="percent">
                  <a href="https://mayawebtech.com/" target="_blank">
                    Visit Company...
                  </a>
                </span>
              </p>
            </li>
            <li>
              <p className="course">RS Technology </p>
              <p className="college">Web Developer Intern </p>
              <p className="date-per">
                <span className="date"> May2023 - Oct2023  </span>{" "}
                <span className="percent">
                  <a href="https://omgeniustech.com/" target="_blank">
                    Visit Company...
                  </a>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  // Skills Tab
  else if (tabNo === "tab-3") {
    const mySkills = [
      { Name: "React.js", Percent: 90 },
      { Name: "Next.js", Percent: 55 },
      { Name: "HTML5", Percent: 90 },
      { Name: "CSS3", Percent: 85 },
      { Name: "Vue.js", Percent: 50 },
      { Name: "Redux ", Percent: 60 },
      { Name: "Tailwind", Percent: 80 },
      { Name: "JavaScript", Percent: 75 },
      { Name: "Bootstrap", Percent: 90 },
      { Name: "Node.js", Percent: 40 },
      { Name: "Material UI", Percent: 55 },
      { Name: "Express JS", Percent: 50 },
    ];
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Skills 🔽</h1>
          <ul>
            {mySkills.map((skill, index) => (
              <li key={index}>
                <ProgressBar name={skill.Name} no={skill.Percent} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  // Projects Tab
  else if (tabNo === "tab-4") {
    const myProjects = [
      {
        title:
          '"E-COMMERCE WEBSITE"',
        subTitle:
          'Designed and developed a visually appealing and user-friendly website for BoneHornMart, showcasing their product catalog and providing an engaging online experience.',
        time: "Technology Used : React.js, Tailwind CSS, CSS3, Redux Tool Kit, Email.js",
        desc: [
          "A window application which provides the users to login & register. It provides various applications like Notepad, Student Management App.",
          "In Student Management System, Authorised user can perform CRUD operations for Student and Faculties."
        ],
        link: "https://bonehornmart.com/"
      },
      {
        title:
          '"IT COMPANY WEBSITE"',
        subTitle:
          'Designed and developed a website for an IT company, showcasing their services and expertise.',
        time: "Technology Used : React.js, Bootstrap, CSS3 and MUI.",
        desc: [
          "The main objective of this project is to make a personal assistant for the user. It's work is to recognise our voice and convert it into query to perform some specific tasks.",
          "It can open Wikipedia, browsers, applications, songs, videos, and sending mails with the help of voice only."
        ],
        link: "https://technove.co.in/"
      },
      {
        title:
          '"RESTAURANT WEBSITE"',
        subTitle:
          'Designed and developed a website for a restaurant, showcasing their menu and products.',
        time: " Technologies Used : React.js, Bootstrap, CSS3.",
        desc: [
          "It provides the details of ongoing cases of the covid-19 pandemic in India.",
          "It provides the details state-wise as well as district-wise with the help of official API data. It also provides tabular, graphical, and map visualisation of Covid data.",
          "It is also an E-Commerce platform related to the essential things for covid-19."
        ],
        link: "http://miam.mayawebtech.in/"
      },
      {
        title:
          '"PERSONAL IT COMPANY WEBSITE"',
        subTitle:
          'Conceived and developed a personal IT company, Om Genius Technology, showcasing my entrepreneurial spirit and technical expertise.',
        time: "Technology Used : JavaScript, CSS3, HTML5, Bootstrap",
        desc: [
          "The main objective of this project is to predict the price of the house by using boston dataset and linear Regression model of Sklearn library on the basis of various factors affecting the price of house."
        ],
        link: "https://omgeniustech.com/"
      },


    ];
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">Project Details 🔽</h1>
          <ul className="projects">
            {myProjects.map(pro => {
              return (
                <li>
                  <p className="course">
                    {pro.title}, <br /> <span className="sub-title">
                      {pro.subTitle}
                    </span>
                  </p>
                  {/* <ul className="desc">
                    {pro.desc.map(point => <li>{point}</li>)}
                  </ul> */}
                  <p className="date-per">
                    <span className="date"> {pro.time}</span>{" "}
                    <a href={pro.link} className="link"> View Now</a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
  // Interest Tab
  else if (tabNo === "tab-5") {
    let myInterest = [
      { Name: "Programming" },
      { Name: "Singing" },
      { Name: "Writing" },
      { Name: "Travelling" },
    ];
    return (
      <section id={tabNo}>
        <div className="tab">
          <h1 className="tab-title my-4 text-center">My Interests 🔽</h1>
          <ul>
            {myInterest.map((interest, index) => (
              <li key={index}>
                <span className="px-4">✨</span>
                {interest.Name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
};

const Resume = () => {
  const [activeTab, setTab] = useState("tab-1");

  return (
    <div className="resume-box container my-5">
     <div data-aos="fade-left">
     <Title title="Resume" subTitle="My Formal Bio Details" />
     </div>
      <div data-aos="fade-right" className="resume">
        <ul id="tabs">
          <li className="edu-tab">
            <a
              href="#tab-1"
              name="tab-1"
              title="Education Details"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">🎓</span>
              <p
                className={
                  activeTab === "tab-1" ? "resume-tab active" : "resume-tab"
                }
              >
                Education
              </p>
            </a>
          </li>
          <li className="work-tab">
            <a
              href="#tab-2"
              name="tab-2"
              title="Work History"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">💼</span>
              <p
                className={
                  activeTab === "tab-2" ? "resume-tab active" : "resume-tab"
                }
              >
                Work History
              </p>
            </a>
          </li>
          <li className="skill-tab">
            <a
              href="#tab-3"
              name="tab-3"
              title="Skills"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">💻</span>
              <p
                className={
                  activeTab === "tab-3" ? "resume-tab active" : "resume-tab"
                }
              >
                Skills
              </p>
            </a>
          </li>
          <li className="pro-tab">
            <a
              href="#tab-4"
              name="tab-4"
              title="Projects"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">📊</span>
              <p
                className={
                  activeTab === "tab-4" ? "resume-tab active" : "resume-tab"
                }
              >
                Projects Details
              </p>
            </a>
          </li>
          <li className="int-tab">
            <a
              href="#tab-5"
              name="tab-5"
              title="Interests"
              onClick={(e) => setTab(e.currentTarget.name)}
            >
              <span className="tab-icon">🎭</span>
              <p
                className={
                  activeTab === "tab-5" ? "resume-tab active" : "resume-tab"
                }
              >
                My Interests
              </p>
            </a>
          </li>
        </ul>
        <div className="section">
          <Tabs tabNo={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
