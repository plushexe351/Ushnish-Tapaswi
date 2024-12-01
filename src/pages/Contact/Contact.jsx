import React, { useEffect } from "react";
import AnimatedPageWrapper from "../AnimatedPageWrapper";
import Side from "../../components/Side";
import Main from "../../components/Main";
import ScrollToTop from "../../ScrollToTop";

const Contact = () => {
  return (
    <AnimatedPageWrapper pageName="contact">
      <Main pageName="contact" />
      <Side />
    </AnimatedPageWrapper>
  );
};

export default Contact;
