import React, { useState } from "react";
import "../tab.scss";
import { experiences } from "./experiences";
import euphoria from "../../assets/euphoria-cert.jpeg";
import "./AboutMe.scss";
import placeholderImg from "../../assets/placeholder.png";

const AboutMe = () => {
  const [view, setView] = useState("About me");
  const navItems = ["About me", "Experience"];
  return (
    <div className="tab">
      <nav className="menubar">
        <div className="navbar">
          {navItems.map((item, index) => (
            <div
              className={`nav-item ${view === item ? "active" : ""}`}
              onClick={() => setView(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </nav>
      {view === "Experience" && (
        <div className="experiences">
          {experiences.map((experience, index) => (
            <div className="experience" key={index}>
              <img src={experience.companyLogo || placeholderImg} alt="" />
              <div className="experience-details">
                <h3 className="experience-title">{experience.title}</h3>
                <div className="experience-company">
                  {experience.company && experience.company}
                  <div className="wordbreak"></div>
                  {experience.type}
                </div>
                <div className="experience-duration">{experience.duration}</div>
                <div className="experience-location">{experience.location}</div>
                <ul className="experience-description">
                  {experience.description.map((each, index) => (
                    <li key={index}>{each}</li>
                  ))}
                </ul>
                <div className="experience-skills">
                  {experience.skills.map((skill, index) => (
                    <div>{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {view === "About me" && (
        <div className="aboutMe">
          <h1 id="greet">
            Hi 👋 I am <strong>Ushnish Tapaswi</strong>
          </h1>
          {/* <div className="styled-break"></div> */}
          {/* <div className="social-badges">
            <a href="https://www.linkedin.com/in/ushnish-tapaswi-719489267/">
              <img
                src="https://img.shields.io/badge/linkedin-informational?style=flat&logo=linkedin&color=0A66C2"
                alt="social linkedin"
              />
            </a>

            <a href="https://plushexe351.github.io/Personal-Website">
              <img
                src="https://img.shields.io/badge/plushexe351-whitesmoke?style=flat&logo=github&color=gray"
                alt="link to my website"
              />
            </a>
          </div> */}
          <div className="description">
            <p>
              I focus on user-centric design and building reliable backend
              systems that work seamlessly together.
            </p>
          </div>
          {/* <blockquote>
            Engineer of online experiences. Crafting invisible threads that
            connect users with technology.
          </blockquote> */}
          <div className="techstack">
            {/* <img
              src="https://img.shields.io/badge/code-JavaScript-informational?style=flat&logo=javascript&color=333333&labelColor=333333"
              alt="language js"
            />
            <img
              src="https://img.shields.io/badge/code-Python-informational?style=flat&logo=python&color=333333&labelColor=333333"
              alt="language py"
            /> */}
            <img
              src="https://img.shields.io/badge/frontend-react-informational?style=flat&logo=react&color=333333&labelColor=333333"
              alt="framework react"
            />
            <img
              src="https://img.shields.io/badge/bundler-vite-informational?style=flat&logo=vite&color=333333&labelColor=333333"
              alt="bundler react"
            />
            <img
              src="https://img.shields.io/badge/backend-express-informational?style=flat&logo=express&color=333333&labelColor=333333"
              alt="backend express"
            />
            <img
              src="https://img.shields.io/badge/backend-node-informational?style=flat&logo=node.js&color=333333&labelColor=333333"
              alt="backend node"
            />
            <img
              src="https://img.shields.io/badge/backend-flask-informational?style=flat&logo=flask&color=333333&labelColor=333333"
              alt="mysql"
            />
            <img
              src="https://img.shields.io/badge/UI-sass-informational?style=flat&logo=sass&color=333333&labelColor=333333"
              alt="UI sass"
            />
            <img
              src="https://img.shields.io/badge/UI-tailwind-informational?style=flat&logo=tailwindcss&color=333333&labelColor=333333"
              alt="UI tailwind"
            />
            <img
              src="https://img.shields.io/badge/DB-mongodb-informational?style=flat&logo=mongodb&color=333333&labelColor=333333"
              alt="mongodb"
            />
            <img
              src="https://img.shields.io/badge/cloud-firebase-informational?style=flat&logo=firebase&color=333333&labelColor=333333"
              alt="firebase"
            />
            <img
              src="https://img.shields.io/badge/DB-mysql-informational?style=flat&logo=mysql&color=333333&labelColor=333333"
              alt="mysql"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
