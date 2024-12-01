import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedPageWrapper = ({ children, pageName }) => {
  return (
    // <AnimatePresence>
    <div
      key={pageName}
      className={pageName.toLowerCase()}
      // initial={{ opacity: 0, y: "40vh" }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: "-40vh" }}
      // transition={{ duration: 0.3 }}
    >
      {children}
    </div>
    // </AnimatePresence>
  );
};

export default AnimatedPageWrapper;
