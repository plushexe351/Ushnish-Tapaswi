import React from "react";
import profileImage from "../../assets/profile-image.jpeg";
import {
  GitHub,
  Link as LinkIcon,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  ChevronRight,
} from "react-feather";
import { Link } from "react-router-dom";
import "./ProfileCard.scss";
import CV from "../../assets/CV.pdf";
import cert1 from "../../assets/ibm-cert.png";
import cert2 from "../../assets/edx-cert.png";
import cert3 from "../../assets/edx-cert.png";

const ProfileCard = () => {
  const socials = [
    {
      label: "Ushnish Tapaswi",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ushnish-tapaswi-719489267/",
    },
    {
      label: "iamushnishtapaswi@gmail.com",
      icon: Mail,
      link: "mailto:iamushnishtapaswi@gmail.com",
    },
    {
      label: "plushexe351",
      icon: GitHub,
      link: "https://github.com/plushexe351",
    },
  ];
  return (
    <div className="profileCard">
      <div className="hero">
        <img src={profileImage} alt="" id="profile-image" />
        <div className="title">
          <h2 id="name">
            Ushnish Tapaswi <span className="wordbreak"></span>
            <span className="pronouns">he/him</span>
          </h2>
          <p id="location">
            <MapPin className="icon" /> <span>India</span>
          </p>
        </div>
      </div>
      <div className="description">20, MERN Stack and Python Developer</div>
      <div className="actions">
        <a href={CV} download="Ushnish_Tapaswi.pdf">
          Resume
        </a>
        <a href="mailto:iamushnishtapaswi@gmail.com">Hire me</a>
      </div>
      <div className="socials">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank">
            <social.icon className="icon" />
            {social.label}
            {/* <LinkIcon className="icon" /> */}
          </a>
        ))}
      </div>
      <hr className="styled-break" />
      <div className="certifications">
        <p className="certifications--title">
          Certifications <ChevronRight className="icon" />
        </p>
        <div className="certificates">
          <div className="certificate">
            <img src={cert1} alt="" />
            <p className="certificate-title"></p>
          </div>
          <div className="certificate">
            <img src={cert2} alt="" />
            <p className="certificate-title"></p>
          </div>
          <div className="certificate">
            <img src={cert3} alt="" />
            <p className="certificate-title"></p>
          </div>
          <div className="viewRemainingCertificates">+ 7</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
