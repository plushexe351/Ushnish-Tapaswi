import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import AboutMe from "./About/AboutMe";
import TopProjects from "./TopProjects/TopProjects";
import { GitHubCalendar } from "github-contribution-calendar";
import ContactTab from "./ContactTab/ContactTab";
import { h1 } from "framer-motion/client";
import WIP from "./WIP/WIP";
const token = import.meta.env.VITE_API_GITHUB_ACCESS_TOKEN;

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
  return <main key={pageName}>{pageContent[pageName] || null}</main>;
};

export default Main;
