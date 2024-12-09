import React, { useState } from "react";
import profileImage from "../../assets/profile-image.jpeg";
import { GitHub, Linkedin, Mail, MapPin, ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.scss";
import CV from "../../assets/CV.pdf";
import CertificationsModal from "../Modals/Certifications/CertificationsModal";
import { certificates } from "../SharedData";
import LazyImage from "../LazyImage";

const ProfileCard = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const Navigate = useNavigate();
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

  const handleHireMeClick = () => {
    Navigate("/contact");
  };
  return (
    <div className="profileCard">
      <div className="hero">
        <img src={profileImage} alt="" id="profile-image" />
        <div className="title">
          <h2 id="name">
            Ushnish Tapaswi
            {/* <span className="pronouns">he / him</span> */}
          </h2>
          <p id="location">
            <MapPin className="icon" /> <span>WB, India</span>
          </p>
        </div>
      </div>
      <div className="description">20, MERN Stack and Python Developer</div>
      <div className="actions">
        <a href={CV} download="Ushnish_Tapaswi.pdf">
          Resume
        </a>
        <p onClick={handleHireMeClick}>Hire me</p>
      </div>
      <div className="socials">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank">
            <social.icon className="icon" />
            {social.label}
          </a>
        ))}
      </div>
      <hr className="styled-break" />
      <div className="certifications" onClick={() => setModalOpen(true)}>
        <p className="certifications--title">
          Certifications <ChevronRight className="icon" />
        </p>
        <div className="certificates">
          {certificates.map(
            (certificate, index) =>
              certificate.pinned && (
                <div className="certificate" key={index}>
                  <img src={certificate.logo} alt="" />
                </div>
              )
          )}
          <div className="viewRemainingCertificates">
            +{certificates.filter((certificate) => !certificate.pinned).length}
          </div>
        </div>
      </div>
      {ModalOpen && <CertificationsModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default ProfileCard;
