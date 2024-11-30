import React from "react";
import ProfileCard from "./ProfileCard/ProfileCard";
import AboutMe from "./About/AboutMe";
import TopProjects from "./TopProjects/TopProjects";
import WorkXp from "./WorkXp";
import { GitHubCalendar } from "github-contribution-calendar";
const token = import.meta.env.VITE_API_GITHUB_ACCESS_TOKEN;
const Main = () => {
  return (
    <main>
      <AboutMe />
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
      <TopProjects />
    </main>
  );
};

export default Main;
