import React from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.scss";
import { BookOpen, Grid, MessageSquare, Edit } from "react-feather";

const TopBar = () => {
  const navLinks = [
    {
      path: "/overview",
      label: "Overview",
      icon: BookOpen,
    },
    {
      path: "/projects",
      label: "Projects",
      icon: Grid,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: MessageSquare,
    },
    {
      path: "/blog",
      label: "Blog",
      icon: Edit,
    },
  ];

  return (
    <header className="topbar">
      <nav>
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
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
