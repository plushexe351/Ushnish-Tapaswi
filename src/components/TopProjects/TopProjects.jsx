import React from "react";
import chatapp from "../../assets/chatApp.png";
import euphoria from "../../assets/Euphoria.png";
import flappyBird from "../../assets/flappyBird.png";
import iPodSimulator from "../../assets/iPodSimulator.png";

import "./TopProjects.scss";

const TopProjects = () => {
  const TopProjects = [
    {
      name: "Twixt Chat",
      description: "A Realtime Chat App with AI messaging tools ",
      techStack: ["React", "Firebase", "Sass"],
      thumbnail: chatapp,
      livePreviewURL: "",
      sourceURL: "",
    },
    {
      name: "Euphoria ChatBot",
      description: "A Gemini Based ChatBot-cum-assistant",
      techStack: ["React", "Firebase", "Sass"],
      thumbnail: euphoria,
      livePreviewURL: "",
      sourceURL: "",
    },
    {
      name: "iPod Simulator",
      description: "An iPod Simulator made using Vanilla Js",
      techStack: ["HTML", "CSS", "Vanilla Js"],
      thumbnail: iPodSimulator,
      livePreviewURL: "",
      sourceURL: "",
    },
    {
      name: "Flappy Bird",
      description: "A Simple Flappy Bird game made using HTML Canvas",
      techStack: ["HTML", "CSS", "HTML 5 Canvas"],
      thumbnail: flappyBird,
      livePreviewURL: "",
      sourceURL: "",
    },
  ];
  return (
    <div className="topProjects">
      <p className="projects--title">Pinned Projects</p>
      <div className="projects-container">
        {TopProjects.map((project, index) => (
          <div className="project" key={index}>
            <p className="project-title">{project.name}</p>
            <img src={project.thumbnail} alt="" />
            <div className="project-details">
              <p className="project-description">{project.description}</p>
              <p className="project--tech-stack">
                {project.techStack.map((tech, index) => (
                  <div className="tech">{tech}</div>
                ))}
                {/* <div className="tech">Firebase</div>
                <div className="tech">Sass</div>  */}
              </p>
            </div>
          </div>
        ))}
        {/* <div className="project">
          <p className="project-title">Twixt Chat</p>
          <img src={chatapp} alt="" />
          <div className="project-details">
            <p className="project-description">
              A Chat App Made Using React And Sass
            </p>
            <p className="project--tech-stack">
              <div className="tech">React</div>
              <div className="tech">Firebase</div>
              <div className="tech">Sass</div>
            </p>
          </div>
        </div>
        <div className="project">
          <p className="project-title">Twixt Chat</p>
          <img src={euphoria} alt="" />
          <div className="project-details">
            <p className="project-description">
              A Chat App Made Using React And Sass
            </p>
            <p className="project--tech-stack">
              <div className="tech">React</div>
              <div className="tech">Firebase</div>
              <div className="tech">Sass</div>
            </p>
          </div>
        </div>
        <div className="project">
          <p className="project-title">Twixt Chat</p>
          <img src={flappyBird} alt="" />
          <div className="project-details">
            <p className="project-description">
              A Chat App Made Using React And Sass
            </p>
            <p className="project--tech-stack">
              <div className="tech">React</div>
              <div className="tech">Firebase</div>
              <div className="tech">Sass</div>
            </p>
          </div>
        </div>
        <div className="project">
          <p className="project-title">Twixt Chat</p>
          <img src={iPodSimulator} alt="" />
          <div className="project-details">
            <p className="project-description">
              A Chat App Made Using React And Sass
            </p>
            <p className="project--tech-stack">
              <div className="tech">React</div>
              <div className="tech">Firebase</div>
              <div className="tech">Sass</div>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TopProjects;
