import React, { useState } from "react";
import "../tab.scss";
import ContactForm from "./ContactForm";

const ContactTab = () => {
  const [view, setView] = useState("Message Me");
  const navItems = ["Message Me", "Socials"];
  return (
    <div className="tab">
      <nav className="menubar">
        <div className="navbar">
          {navItems?.map((item, index) => (
            <div
              key={index}
              className={`nav-item ${view === item ? "active" : ""}`}
              onClick={() => setView(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </nav>
      {view === "Message Me" && (
        <div className="message">
          <h1 id="greet">Send me a message 💬 </h1>
          <div className="description">
            I will get back to you within 48 hrs.
          </div>
          <ContactForm />
        </div>
      )}
      {view === "Socials" && (
        <div className="socials">
          <h1 id="greet">Let's connect 🤝</h1>
          {/* <ContactForm /> */}
          <div className="description">
            Connect to me on one of my socials and I will get back to you within
            48 hrs.
          </div>
          <div className="social-badges">
            <a
              href="https://www.linkedin.com/in/ushnish-tapaswi-719489267/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-Ushnish%20Tapaswi-0A66C2?style=flat&logo=linkedin&logoColor=white"
                alt="social linkedin"
              />
            </a>

            <a
              href="https://plushexe351.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/GitHub-plushexe351-333333?style=flat&logo=github"
                alt="link to my github profile"
              />
            </a>
            <a
              href="mailto:iamushnishtapaswi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Gmail-iamushnishtapaswi@gmail.com-333333?style=flat&logo=gmail"
                alt="mailto: iamushnishtapaswi@gmail.com"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTab;
