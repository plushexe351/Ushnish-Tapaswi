import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedPageWrapper = ({ children, pageName }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageName}
        className={pageName.toLowerCase()}
        initial={{ opacity: 0, y: "10vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-10vh" }}
        transition={{ duration: 0.32 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPageWrapper;
