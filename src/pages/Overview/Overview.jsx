import React from "react";
import Side from "../../components/Side";
import Main from "../../components/Main";
import "./Overview.scss";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPageWrapper from "../AnimatedPageWrapper";
import ScrollToTop from "../../ScrollToTop";

const Overview = () => {
  return (
    <AnimatedPageWrapper pageName="overview">
      <Side />
      <Main pageName="overview" />
    </AnimatedPageWrapper>
  );
};

export default Overview;
