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
const pageContent = {
  overview: (
    <>
      <AboutMe />
      <TopProjects filter="pinned" />
      <GitHubCalendar
        username="plushexe351"
        token={token}
        theme="galaxy"
        background="transparent"
        cellSize="10"
        titleColor="white"
        fontSize="12"
        labelColor="white"
      />
    </>
  ),
  projects: <TopProjects filter="all" />,
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
