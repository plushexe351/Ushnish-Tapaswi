import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">Ushnish Tapaswi's portfolio</Link>
      <Link to="/overview">Overview</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default Footer;
