import React from "react";
import ModalWrapper from "../ModalWrapper";
import ibm from "../../../assets/ibm-cert.png";
import edx from "../../../assets/edx-cert.png";
import fcc from "../../../assets/fcc-cert.jpeg";
import euphoria from "../../../assets/euphoria-cert.jpeg";

import { ExternalLink, Link, Link2 } from "react-feather";

const CertificationsModal = ({ setModalOpen }) => {
  const certificates = [
    {
      title: "MERN Stack Development | Industrial Training",
      logo: euphoria,
      issuedBy: "Euphoria GenX",
      issuedOn: "Sep 2024",
    },
    {
      title: "Python for Data Science",
      logo: ibm,
      issuedBy: "IBM",
      issuedOn: "Sep 2024",
      credential:
        "https://www.credly.com/badges/4fa1033f-4836-4107-9414-6f14e5a846fc/linked_in_profile",
    },
    {
      title:
        "edX Verified Certificate for Back-end Application Development with Node.js and Express",
      logo: edx,
      issuedBy: "edX",
      issuedOn: "Apr 2024",
      credential:
        "https://courses.edx.org/certificates/0b643e2b10844cd7b90c91f938df6c3a",
    },
    {
      title: "Responsive Web Design",
      logo: fcc,
      issuedBy: "freeCodeCamp",
      issuedOn: "Dec 2023",
      credential:
        "https://freecodecamp.org/certification/fcc4113bec4-c9e5-4407-a9e3-601b5063cdfb/responsive-web-design",
    },
  ];
  return (
    <ModalWrapper title="Certifications" setModalOpen={setModalOpen}>
      <>
        <div className="certifications-container">
          {certificates.map((certificate, index) => (
            <div className="certificate" key={index}>
              <img src={certificate.logo} alt="" className="certificate-logo" />
              <div className="certificate-details">
                <div className="certificate-title">{certificate.title}</div>
                <div className="certificate-organization">
                  {certificate.issuedBy}
                </div>
                <div className="certificate-issued-on">
                  Issued {certificate.issuedOn}
                </div>
                {certificate.credential && (
                  <a
                    href={certificate.credential}
                    target="_blank"
                    className="certificate-credentials-link"
                  >
                    Show Credential <ExternalLink className="icon" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </>
    </ModalWrapper>
  );
};

export default CertificationsModal;
