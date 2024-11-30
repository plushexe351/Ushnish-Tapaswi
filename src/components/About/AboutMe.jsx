import React, { useState } from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  const [view, setView] = useState("About me");
  const navItems = ["About me", "Experience"];
  return (
    <div className="readme">
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
        <div className="experience">100 years of coding</div>
      )}
      {view === "About me" && (
        <div className="aboutMe">
          <h1 id="greet">Hi 👋 I am Ushnish Tapaswi</h1>
          <hr className="styled-break" />
          <div className="social-badges">
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
          </div>
          <div className="description">
            <p>
              I’m a <em>Web Developer</em> specializing in the MERN stack. My
              focus is on user-centric design and building reliable backend
              systems that work seamlessly together.
            </p>
          </div>
          <blockquote>
            Engineer of online experiences. Crafting invisible threads that
            connect users with technology.
          </blockquote>
          <div className="techstack">
            <img
              src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&color=333333&labelColor=333333"
              alt="language js"
            />
            <img
              src="https://img.shields.io/badge/Code-Python-informational?style=flat&logo=python&color=333333&labelColor=333333"
              alt="language py"
            />
            <img
              src="https://img.shields.io/badge/Framework-React-informational?style=flat&logo=react&color=333333&labelColor=333333"
              alt="framework react"
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
              src="https://img.shields.io/badge/UI-scss-informational?style=flat&logo=sass&color=333333&labelColor=333333"
              alt="UI sass"
            />
            <img
              src="https://img.shields.io/badge/nosql-mongodb-informational?style=flat&logo=mongodb&color=333333&labelColor=333333"
              alt="mongodb"
            />
            <img
              src="https://img.shields.io/badge/nosql-firebase-informational?style=flat&logo=firebase&color=333333&labelColor=333333"
              alt="firebase"
            />
            <img
              src="https://img.shields.io/badge/DB-MySQL-informational?style=flat&logo=mysql&color=333333&labelColor=333333"
              alt="mysql"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
