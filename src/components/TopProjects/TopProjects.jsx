import React from "react";
import chatapp from "../../assets/chatApp.png";
import euphoria from "../../assets/Euphoria.png";
import flappyBird from "../../assets/flappyBird.png";
import iPodSimulator from "../../assets/iPodSimulator.png";
import noteme from "../../assets/noteme.png";
import gcc from "../../assets/gcc.png";
import pos from "../../assets/pos.png";
import "./TopProjects.scss";
import { Code, Globe } from "react-feather";
import LazyImage from "../LazyImage";
import etchasketch from "../../assets/etchasketch.png";

const TopProjects = ({ filter }) => {
  const projects = [
    {
      name: "Twixt Chat",
      description: "A Realtime Chat App with AI messaging tools",
      techStack: ["React", "Firebase", "Sass"],
      thumbnail: chatapp,
      pinned: true,
      livePreviewURL: "https://react-chat-app-jet.vercel.app/",
      sourceURL: "https://github.com/plushexe351/react-chat-app",
    },
    {
      name: "github-contribution-calendar",
      description: "A React Component for Github Contributions Map",
      techStack: ["React", "CSS"],
      thumbnail: gcc,
      pinned: true,
      livePreviewURL: "",
      sourceURL: "https://github.com/plushexe351/github-contribution-calendar",
    },
    {
      name: "Euphoria ChatBot",
      description: "A Gemini Based ChatBot-cum-assistant",
      techStack: ["HTML", "CSS", "Google Gemini", "Node.js", "Express.js"],
      thumbnail: euphoria,
      pinned: false,
      livePreviewURL: "https://euphoria-chatbot.onrender.com/",
      sourceURL: "https://github.com/plushexe351/Euphoria-ChatBot",
    },

    {
      name: "Noteme.md",
      description: "Markdown Notebook with AI Writing Tools",
      techStack: [
        "React",
        "MongoDB",
        "Firebase",
        "SASS",
        "Node.js",
        "Express.js",
      ],
      thumbnail: noteme,
      pinned: true,
      livePreviewURL: "",
      sourceURL: "",
    },
    {
      name: "Purchase Order System",
      description:
        "Purchase Order System with User, Vendor & Requisition Management and PO Generation",
      techStack: ["React", "MySQL", "Node.js", "Express.js", "SASS"],
      thumbnail: pos,
      pinned: true,
      livePreviewURL: "",
      sourceURL: "",
    },
    {
      name: "iPod Simulator",
      description: "An iPod Simulator made using Vanilla Js",
      techStack: ["HTML", "CSS", "Vanilla JavaScript"],
      thumbnail: iPodSimulator,
      pinned: false,
      livePreviewURL: "https://plushexe351.github.io/iPodSimulator/",
      sourceURL: "https://github.com/plushexe351/iPodSimulator",
    },
    {
      name: "Etch a Sketch",
      description: "A Pixel Art Making Website",
      techStack: ["HTML", "CSS", "Vanilla JavaScript"],
      thumbnail: etchasketch,
      pinned: false,
      livePreviewURL: "https://plushexe351.github.io/Etch-a-Sketch/",
      sourceURL: "https://github.com/plushexe351/Etch-a-Sketch",
    },
    {
      name: "Flappy Bird",
      description: "A Simple Flappy Bird game made using HTML Canvas",
      techStack: ["HTML", "CSS", "HTML 5 Canvas"],
      thumbnail: flappyBird,
      pinned: false,
      livePreviewURL: "https://plushexe351.github.io/FlappyBird/",
      sourceURL: "https://github.com/plushexe351/FlappyBird",
    },
  ];

  const filteredProjects =
    filter === "pinned"
      ? projects.filter((project) => project.pinned)
      : projects;

  const ProjectCard = ({ project }) => (
    <div className="project">
      <p className="project-title">
        {project.name}
        <span className="project--links">
          {project.livePreviewURL && (
            <a
              href={project.livePreviewURL}
              target="_blank"
              rel="noreferrer"
              title="Live Preview"
            >
              <Globe className="icon" />
            </a>
          )}
          {project.sourceURL && (
            <a
              href={project.sourceURL}
              target="_blank"
              rel="noreferrer"
              title="Source Code"
            >
              <Code className="icon" />
            </a>
          )}
        </span>
      </p>
      <LazyImage src={project.thumbnail} alt={`${project.name} Thumbnail`} />
      <div className="project-details">
        <p className="project-description">{project.description}</p>
        <div className="project--tech-stack">
          {project.techStack.map((tech, index) => (
            <span className="tech" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="topProjects">
      <p className="projects--title">
        {filter === "pinned" ? "Pinned Projects" : "Top Projects"}
      </p>
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TopProjects;
