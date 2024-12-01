import React from "react";
import "./Projects.scss";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPageWrapper from "../AnimatedPageWrapper";
import Side from "../../components/Side";
import Main from "../../components/Main";
import ScrollToTop from "../../ScrollToTop";

const Projects = () => {
  return (
    <AnimatedPageWrapper pageName="projects">
      <Main pageName="projects" />
      <Side />
    </AnimatedPageWrapper>
  );
};

export default Projects;
