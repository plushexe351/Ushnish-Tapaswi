import React from "react";
import "./Modal.scss";
import { motion, AnimatePresence } from "framer-motion";

const ModalWrapper = ({ children, title, setModalOpen }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-window"
        key="modal-window"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="modal-container"
          initial={{ opacity: 0, y: "2vh" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal-topbar">
            <div className="close" onClick={() => setModalOpen(false)}></div>
            <h3>{title}</h3>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalWrapper;
