import React, { useState } from "react";
import "../tab.scss";
import ContactForm from "./ContactForm";

const ContactTab = () => {
  const [view, setView] = useState("Message Me");
  const navItems = ["Message Me"];
  return (
    <div className="tab">
      <nav className="menubar">
        <div className="navbar">
          {navItems.map((item, index) => (
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
        <div className="aboutMe">
          <h1 id="greet">Send me a message 💬</h1>
          <ContactForm />
        </div>
      )}
    </div>
  );
};

export default ContactTab;
