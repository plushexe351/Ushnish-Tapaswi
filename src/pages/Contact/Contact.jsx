import React from "react";
import AnimatedPageWrapper from "../AnimatedPageWrapper";
import Side from "../../components/Side";
import Main from "../../components/Main";

const Contact = () => {
  return (
    <AnimatedPageWrapper pageName="contact">
      <Side />
      <Main pageName="contact" />
    </AnimatedPageWrapper>
  );
};

export default Contact;
