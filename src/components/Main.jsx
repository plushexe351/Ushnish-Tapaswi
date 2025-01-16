import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import AboutMe from "./About/AboutMe";
import TopProjects from "./TopProjects/TopProjects";
import { GitHubCalendar } from "github-contribution-calendar";
import ContactTab from "./ContactTab/ContactTab";
import { h1 } from "framer-motion/client";
import WIP from "./WIP/WIP";
const token = import.meta.env.VITE_API_GITHUB_ACCESS_TOKEN;
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "react-feather";
import { Link } from "react-router-dom";
import Project from "./Project/Project";
const pageContent = {
  overview: (
    <>
      <AboutMe />
      <TopProjects filter="work" />
      <TopProjects filter="pinned" />
      <Link className="see-more" to="/projects">
        See More <ChevronRight className="icon" />
      </Link>
      <GitHubCalendar
        username="plushexe351"
        token={token}
        theme="galaxy"
        background="transparent"
        cellSize="10"
        titleColor="white"
        fontSize="12"
        labelColor="white"
        year={2024}
      />
    </>
  ),
  projects: (
    <>
      <TopProjects filter="work" />
      <TopProjects filter="all" />
    </>
  ),
  "project-details": (
    <>
      <Project />
    </>
  ),
  contact: <ContactTab />,
  blog: <WIP />,
};

const Main = ({ pageName }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pageName}
        initial={{ opacity: 0, y: "8vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-8vh" }}
        transition={{ duration: 0.3 }}
      >
        {pageContent[pageName] || null}
      </motion.main>
      ;
    </AnimatePresence>
  );
};

export default Main;
