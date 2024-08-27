import React from "react";
import Title from "../Title";
import "./Projects.scss";

const Project = () => {
  const myProjects = [
    {
      title: '"E-COMMERCE WEBSITE"',
      subTitle:
        "Designed and developed a visually appealing and user-friendly website for BoneHornMart, showcasing their product catalog and providing an engaging online experience.",
      time: "React.Js, Tailwind, CSS3, Email.Js.",
      desc: [
        "Clean and modern design with a focus on product display",
        "Product catalog with high-quality images and brief descriptions",
        "Responsive layout for optimal viewing on various devices",
        "Easy navigation and scrolling experience",
        "Demonstrated expertise in front-end development and responsive design",
      ],
      imgUrl: "/Portofolio/Assets/ProjectImg/pr11.png",
      link: "https://bonehornmart.com/",
    },
    {
      title: '"IT COMPANY WEBSITE"',
      subTitle:
        "Designed and developed a website for an IT company, showcasing their services and expertise.",
      time: "React.js, Bootstrap, CSS3, AOS Effect.",
      desc: [
        "Demonstrated ability to work independently and manage projects from start to finish.",
        "Developed a strong portfolio piece to showcase to potential clients and employers.",
        "Successfully launched Technove Global Software Pvt.Ltd and developed a showcase project to demonstrate expertise.",
        "Managed all aspects of the project, including planning, execution, and testing.",
        "The project showcases my skills in web development, mobile app development, data analysis, digital marketing, graphics designing etc.",
      ],
      imgUrl: "/Portofolio/Assets/ProjectImg/pr55.jpg",
      link: "https://technove.co.in/",
    },
    {
      title: '"RESTAURANT WEBSITE"',
      subTitle: "Designed and developed a website for a restaurant, showcasing their menu and products.",
      time: "Next.js, CSS3, Tailwind.",
      desc: [
        "Responsive design for mobile and desktop devices",
        "Menu and product display with images and descriptions",
        "Categorization and filtering of menu items",
        "Search functionality for easy product finding",
        "Modern and clean design to showcase the restaurant's brand",
        "Successfully launched the website, providing an online presence for the restaurant",
        "Improved user experience and accessibility for customers to view menu items",
      ],
      imgUrl: "/Portofolio/Assets/ProjectImg/pr33.webp",
      link: "https://gurgaon.miampatisserie.com/",
    },
    {
      title: '"PROPERTY DEALER WEBSITE"',
      subTitle:
        " Developed a fully functional property dealer website, showcasing independence and web development skills.",
      time: "React.Js, Bootstrap, CSS3",
      desc: [
        "Successfully launched a fully functional website, providing an online presence for property dealers.",
        "Demonstrated independence and self-motivation, managing all aspects of the project from planning to deployment.",
        "Improved web development skills, utilizing HTML, CSS, JavaScript, and Bootstrap to create a functional website.",
        "Developed a basic yet user-friendly interface, ensuring easy navigation and property discovery for users.",
        "Showcased ability to work efficiently, completing the project within the given timeframe..",

      ],
      imgUrl: "/Portofolio/Assets/ProjectImg/pr44.jpeg",
      link: "https://snaptics.omgeniustech.com/",
    },
    {
      title: '"PERSONAL IT SERVICES PROJECT"',
      subTitle:
        "Developed and maintained a comprehensive IT services platform, offering innovative solutions, expert advice, and personalized support to clients.",
      time: "JavaScript, HTML, CSS, Tailwind.",
      desc: [
        "Optimized website loading speed by 30% through efficient coding and caching.",
        "Designed and developed a responsive website that adapts to various devices and screen sizes..",
        "Improved website visibility through SEO by 50% through keyword research and on-page optimization.",
        "Streamlined development processes by 20% through agile project management methodologies.",
        " Ensured 99.99% uptime and zero security breaches through robust security measures and access controls.",
      ],
      imgUrl: "/Portofolio/Assets/ProjectImg/pr66.jpg",
      link: "https://omgeniustech.com/",
    },
    {
      title: '"RECIPE FINDER APP"',
      subTitle: "Developed a user-friendly Simple Recipe Finder App with responsive design, dynamic search, and interactive features.",
      time: "React.js, CSS, Tailwind.",
      desc: [
        " Designed and developed a user-friendly interface for the Simple Recipe Finder App, ensuring an intuitive user experience.",
        " Implemented responsive design to ensure seamless rendering on various devices and screen sizes.",
        " Built a dynamic search bar that allows users to search for recipes by ingredient, cooking time, and dietary preferences.",
        "Integrated interactive features, such as hover effects, animations, and tooltips, to enhance user engagement.",
        "Optimized page load times by leveraging browser caching, code splitting, and lazy loading, resulting in a faster and more efficient user experience.",
      ],
      imgUrl: "/Portofolio/Assets/ProjectImg/pr7.png",
      link: "https://ompalsingh79832.github.io/Ompalreact/",
    },
  ];

  return (
    <div className="project my-5">
     <div data-aos="fade-right">
     <Title
        title="Project Details"
        subTitle="My projects gives me motivation !"
      />
     </div>

      {myProjects.map((pro, index) => {
        return (
          <div key={index} className="project-box container">
            <div className="project-detail" >
              <p data-aos="fade-down" className="p-title">{pro.title} 🔽</p>
              <span data-aos="fade-right" className="p-sub-title">{pro.subTitle}</span>
              <span className="p-time">Technology Used : {pro.time}</span>
              <ul data-aos="fade-left" className="desc">
                {pro.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left" className="project-pic">
              <div className="p-pic">
                <a href={pro.link} title={"View Now"}>
                  <img
                    src={pro.imgUrl ? pro.imgUrl : "//unsplash.it/300/300"}
                    alt="project-pic"
                    width={"300px"}
                    height={"300px"}
                  />
                </a>
              </div>
            </div>
            {/* <div className="project-btn">
              <a href={pro.link}>View Now</a>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Project;
