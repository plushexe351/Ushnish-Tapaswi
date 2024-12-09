import React, { useContext } from "react";
import ModalWrapper from "../ModalWrapper";

import { certificates } from "../../SharedData";

import { ExternalLink, Link, Link2 } from "react-feather";
import { p } from "framer-motion/client";
import { Context } from "../../../context/context";

const ProjectsModal = () => {
  const { setModalOpen, project = selectedProject } = useContext(Context);
  return (
    <ModalWrapper title={project.name} setModalOpen={setModalOpen}>
      <>
        <div className="project-container">
          <div className="project-description">{project.description}</div>
          <div className="project-tech-stack">
            {project.techStack.map((tech, index) => (
              <p key={index}>{tech}</p>
            ))}
          </div>
          <div className="project-links">
            {project.livePreviewURL !== "" && (
              <a href={project.livePreviewURL}>Live Preview</a>
            )}
            {project.sourceURL !== "" && <a href={project.sourceURL}>Source</a>}
          </div>
          <div className="project-thumbnail">
            <img src={project.thumbnail} alt="" />
          </div>
        </div>
      </>
    </ModalWrapper>
  );
};

export default ProjectsModal;
