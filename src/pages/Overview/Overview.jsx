import React from "react";
import Side from "../../components/Side";
import Main from "../../components/Main";
import "./Overview.scss";
import { AnimatePresence, motion } from "framer-motion";

const Overview = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="overview"
        key="overview"
        initial={{ opacity: 0, y: "7vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-7vh" }}
        transition={{ duration: 0.2 }}
      >
        <Side />
        <Main />
      </motion.div>
    </AnimatePresence>
  );
};

export default Overview;
