import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.scss";
import { BookOpen, Grid, MessageSquare, Edit } from "react-feather";
import { Context } from "../../context/context";

const TopBar = () => {
  const { selectedProject, setSelectedProject } = useContext(Context);
  const hasSelectedProject = Object.entries(selectedProject).length;
  const navLinks = [
    {
      path: "/overview",
      label: "Overview",
      icon: BookOpen,
    },
    {
      path: hasSelectedProject
        ? `/project/${selectedProject.name}`
        : "/projects",
      label: hasSelectedProject
        ? `Projects / ${selectedProject.name}`
        : "Projects",
      icon: Grid,
      keepSelected: true, // Keep the project selected when navigating to this link
    },
    {
      path: "/contact",
      label: "Contact",
      icon: MessageSquare,
    },
    // {
    //   path: "/blog",
    //   label: "Blog",
    //   icon: Edit,
    // },
  ];

  const handleNavClick = (keepSelected) => {
    if (!keepSelected) {
      setSelectedProject({});
    }
  };

  return (
    <header className="topbar">
      <nav>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            onClick={() => handleNavClick(link.keepSelected)}
          >
            <link.icon className="icon" />
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default TopBar;
