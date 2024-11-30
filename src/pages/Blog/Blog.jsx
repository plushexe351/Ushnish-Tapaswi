import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPageWrapper from "../AnimatedPageWrapper";
import Side from "../../components/Side";
import Main from "../../components/Main";

const Blog = () => {
  return (
    <AnimatedPageWrapper pageName="blog">
      <Main pageName="blog" />
    </AnimatedPageWrapper>
  );
};

export default Blog;
