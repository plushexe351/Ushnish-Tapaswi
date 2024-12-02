import ibm from "../assets/ibm-cert.png";
import edx from "../assets/edx-cert.png";
import fcc from "../assets/fcc-cert.jpeg";
import euphoria from "../assets/euphoria-cert.jpeg";

const certificates = [
  {
    title: "MERN Stack Development | Industrial Training",
    logo: euphoria,
    issuedBy: "Euphoria GenX",
    issuedOn: "Sep 2024",
    pinned: true,
  },
  {
    title: "Python for Data Science",
    logo: ibm,
    issuedBy: "IBM",
    issuedOn: "Sep 2024",
    pinned: true,
    credential:
      "https://www.credly.com/badges/4fa1033f-4836-4107-9414-6f14e5a846fc/linked_in_profile",
  },
  {
    title:
      "edX Verified Certificate for Back-end Application Development with Node.js and Express",
    logo: edx,
    issuedBy: "edX",
    issuedOn: "Apr 2024",
    pinned: true,
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

export { certificates };
