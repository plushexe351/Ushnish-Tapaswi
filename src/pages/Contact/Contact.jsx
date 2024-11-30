import React from "react";
import AnimatedPageWrapper from "../AnimatedPageWrapper";
import Side from "../../components/Side";
import Main from "../../components/Main";

const Contact = () => {
  return (
    <AnimatedPageWrapper pageName="contact">
      <Main pageName="contact" />
      <Side />
    </AnimatedPageWrapper>
  );
};

export default Contact;
