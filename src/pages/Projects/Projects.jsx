import React from "react";
import "./Projects.scss";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="projects"
        key="projects"
        initial={{ opacity: 0, y: "7vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-7vh" }}
        transition={{ duration: 0.2 }}
      >
        Projects
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
