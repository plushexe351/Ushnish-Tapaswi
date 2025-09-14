import React, { useState } from "react";
import "../tab.scss";
import { experiences } from "./experiences";

import "./AboutMe.scss";
import placeholderImg from "../../assets/placeholder.png";

import { Info, Briefcase, Book } from "react-feather";
import { AnimatePresence, motion } from "framer-motion";

const AboutMe = () => {
  const navItems = [
    {
      title: "About me",
      icon: <Info size={17} className="icon" />,
    },
    {
      title: "Experience",
      icon: <Briefcase size={17} className="icon" />,
    },
    // {
    //   title: "Education",
    //   icon: <Book size={17} className="icon" />,
    // },
  ];
  const [view, setView] = useState(navItems[0].title);
  return (
    <div className="tab">
      <nav className="menubar">
        <div className="navbar">
          {navItems.map((item, index) => (
            <div
              className={`nav-item ${view === item.title ? "active" : ""}`}
              onClick={() => setView(item.title)}
            >
              {item.icon}
              {/* {view === item.title && <>{item.title}</>} */}
              {item.title}
            </div>
          ))}
        </div>
      </nav>
      {view === "Experience" && (
        <motion.div className="experiences">
          {experiences.map((experience, index) => (
            <motion.div
              className="experience"
              key={index}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 18,
                delay: index * 0.1,
              }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      )}

      {view === "About me" && (
        <motion.div
          className="aboutMe"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h1 className="greet">Hey 👋 I'm Ushnish Tapaswi</h1>
          <div className="description">
            <p>
              I'm a <strong>Full-stack web developer</strong>. I build
              user-centric design and robust backend systems that work well
              together. In other words, I'm an engineer of online experiences. I
              craft invisible threads that connect users with technology. Here's
              what I work with.
            </p>
          </div>

          <div className="techstack">
            <img
              src="https://img.shields.io/badge/TypeScript-333333?style=flat&logo=typescript"
              alt="language ts"
            />
            <img
              src="https://img.shields.io/badge/JavaScript-333333?style=flat&logo=javascript"
              alt="language js"
            />
            <img
              src="https://img.shields.io/badge/Python-333333?style=flat&logo=python"
              alt="language py"
            />
            <img
              src="https://img.shields.io/badge/React-333333?style=flat&logo=react"
              alt="framework react"
            />
            <img
              src="https://img.shields.io/badge/Vite-333333?style=flat&logo=vite"
              alt="bundler vite"
            />
            <img
              src="https://img.shields.io/badge/Express.js-333333?style=flat&logo=express&logoColor=white"
              alt="backend express"
            />
            <img
              src="https://img.shields.io/badge/Node.js-333333?style=flat&logo=node.js"
              alt="backend node"
            />
            <img
              src="https://img.shields.io/badge/Flask-333333?style=flat&logo=flask"
              alt="flask"
            />
            <img
              src="https://img.shields.io/badge/Sass-333333?style=flat&logo=sass"
              alt="UI sass"
            />
            <img
              src="https://img.shields.io/badge/TailwindCSS-333333?style=flat&logo=tailwindcss"
              alt="UI tailwindcss"
            />
            <img
              src="https://img.shields.io/badge/MongoDB-333333?style=flat&logo=mongodb"
              alt="mongodb"
            />
            <img
              src="https://img.shields.io/badge/Firebase-333333?style=flat&logo=firebase"
              alt="firebase"
            />
            <img
              src="https://img.shields.io/badge/MySQL-333333?style=flat&logo=mysql"
              alt="mysql"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AboutMe;
