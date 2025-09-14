import ibm from "../assets/ibm-cert.png";
import edx from "../assets/edx-cert.png";
import fcc from "../assets/fcc-cert.jpeg";
import euphoriaCert from "../assets/euphoria-cert.jpeg";
import euphoria from "../assets/Euphoria.png";
import chatapp from "../assets/chatApp.png";
import mangastore from "../assets/mangastore.png";
import flappyBird from "../assets/flappyBird.png";
import iPodSimulator from "../assets/iPodSimulator.png";
import noteme from "../assets/noteme.png";
import etchasketch from "../assets/etchasketch.png";
import gcc from "../assets/gcc.png";
import pos from "../assets/pos.png";
import whozzat from "../assets/whozzat.png";
import floatify from "../assets/floatify.png";

const certificates = [
  {
    title: "Industrial Training in MERN Stack Development",
    logo: euphoriaCert,
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
    title: "edX Verified Certificate for Using Python for Research",
    logo: edx,
    issuedBy: "edX",
    issuedOn: "Mar 2024",
    credential:
      "https://courses.edx.org/certificates/61c92a80a7f84083817cd91437e03b2a",
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

const projects = [
  {
    name: "Whozzat",
    description: "A Link in bio tool for all your links in one place",
    techStack: ["React", "Firebase", "Sass"],
    thumbnail: whozzat,
    pinned: true,
    livePreviewURL: "https://whozzat.vercel.app/",
    sourceURL: "https://github.com/plushexe351/whozzat",
    keyFeatures: [
      "Fully Responsive",
      "Email/Google authentication",
      "Place all your links in one place with thumbnails",
      "Stay organized with categories",
      "Share your profile with just a click",
      "View other users and their profiles",
      "Detailed Analytics including Engagement metrics",
    ],
    about: "A full stack link-in-bio tool for all your links in one place.",
  },
  {
    name: "react-floatify",
    description: "A lightweight, customizable toast component library",
    techStack: ["React", "Vite", "TypeScript", "Sass", "framer-motion"],
    thumbnail: floatify,
    pinned: true,
    livePreviewURL: "https://toasty-playground-ten.vercel.app/",
    sourceURL: "https://github.com/plushexe351/react-floatify",
    keyFeatures: [
      "Lightweight and customizable React toast notifications",
      "Multiple toast types: success, error, warning, default",
      "Variants for styling: regular, outlined, contained",
      "Customizable duration, font size, and icon size",
      "Built-in progress bar with optional disable",
      "Animation support via Framer Motion",
      "Positioning flexibility: top/bottom + left/center/right",
      "Simple API with hooks (useToast) for easy integration",
      "TypeScript support with exported types",
      "Minimal CSS — themable with your own styles",
    ],

    about:
      "A lightweight and customizable toast component library for react built using TypeScript, React, Vite, Sass and framer-motion for animations.",
  },

  {
    name: "Ecommerce Mangastore",
    description: "A Full Stack Ecommerce Mangastore",
    techStack: ["React", "Firebase", "Sass"],
    thumbnail: mangastore,
    pinned: true,
    livePreviewURL: "https://ecommerce-mangastore.vercel.app/",
    sourceURL: "https://github.com/plushexe351/ecommerce-mangastore",
    keyFeatures: [
      "User Authentication",
      "Admin Panel - Manage Books, Manage Orders and view sales analytics",
      "Shopping Cart",
      "Personalized Recommendations",
      "AI Helper for navigation and product recommendations",
      "Mark and share your favorite products",
    ],
    about:
      "This project is an Ecommerce store for Manga, designed to provide users with a seamless shopping experience. The app is built using React for the frontend and Firebase for the backend. It is fully responsive and allows users to browse products, manage their cart, and place orders. Additionally, the app includes an admin panel for managing product listings, orders and sales.",
  },
  {
    name: "github-contribution-calendar",
    description: "A React Component for Github Contributions Map",
    techStack: ["React", "CSS"],
    thumbnail: gcc,
    pinned: true,
    livePreviewURL: "",
    sourceURL: "https://github.com/plushexe351/github-contribution-calendar",
    keyFeatures: [
      "Displays a GitHub contribution calendar for a specific year",
      "Customizable appearance (cell size, themes, labels, etc.)",
      "Shows total contributions for the year",
      "Tooltips with contribution count on hover",
    ],
    about:
      "A simple and customizable GitHub contribution calendar built with React. Visualizes your contributions for a given year using a color-coded calendar.",
  },
  {
    name: "Twixt Chat",
    description: "A Realtime Chat App with AI messaging tools",
    techStack: ["React", "Firebase", "Sass"],
    thumbnail: chatapp,
    pinned: true,
    livePreviewURL: "https://react-chat-app-jet.vercel.app/",
    sourceURL: "https://github.com/plushexe351/react-chat-app",
    keyFeatures: [
      "Fully Responsive",
      "Search other users",
      "Add friends",
      "Real time chat",
      "Share images",
    ],
    about:
      "A responsive chat app with user authentication and customizable profiles. Users can connect and chat in real time, sharing images and interacting through AI-powered messaging tools. Profiles display connections and allow for easy editing.",
  },
  {
    name: "Euphoria ChatBot",
    description: "A Gemini Based ChatBot-cum-assistant",
    techStack: ["HTML", "CSS", "Google Gemini", "Node.js", "Express.js"],
    thumbnail: euphoria,
    pinned: false,
    livePreviewURL: "https://euphoria-chatbot.onrender.com/",
    sourceURL: "https://github.com/plushexe351/Euphoria-ChatBot",
    keyFeatures: [
      "Modern and fully responsive UI",
      "Gemini AI integration",
      "Opening websites (use keyword '/open')",
      "Google Search using Custom Search JSON API (use keyword 'search')",
      "Fetching most relevant images (use keyword 'generate' or 'image'; example - 'images of batman')",
      "Searching/Playing Songs on Youtube using Youtube Data Search API (use keyword 'play' or 'play on youtube')",
      "Telling Jokes",
      "Accurate calculations using math.js library",
      "Logging history where queries can be revisited",
    ],
    about:
      "A versatile chatbot that engages in contextual conversations and fetches relevant links. It can search for images and play music. Users can open websites directly using a simple command. The web app is fully responsive for seamless use.",
  },

  {
    name: "Noteme.md",
    description: "Markdown Notebook with AI Writing Tools",
    techStack: [
      "React",
      "MongoDB",
      "Firebase",
      "SASS",
      "Node.js",
      "Express.js",
    ],
    thumbnail: noteme,
    work: true,
    livePreviewURL: "https://noteme-md.vercel.app",
    sourceURL: "https://github.com/plushexe351/noteme.md",
    about: `Noteme is an AI-powered note-taking app with markdown editing and real-time saving. It offers easy Google authentication, automatic note title recognition, and efficient note organization with search functionality. With responsive design and AI writing tools, creating and managing content, including code, is simpler than ever.
`,
    keyFeatures: [
      "Integrated Google Sign-In for easy authentication",
      "Implemented categorization, real-time saving, and search functionality",
      "Developed AI tools for writing, summarizing, rewriting, and code generation",
      "Enabled quiz creation and evaluation with AI assistance",
      "Added support for importing and parsing PDF and DOCX files",
      "Implemented table generation and content expansion features",
    ],
  },
  {
    name: "Purchase Order System",
    description:
      "Purchase Order System with User, Vendor & Requisition Management and PO Generation",
    techStack: ["React", "MySQL", "Node.js", "Express.js", "SASS"],
    thumbnail: pos,
    work: true,
    livePreviewURL: "",
    sourceURL: "",
    about: `Designed to simplify and streamline business operations, this Purchase Order System provides an intuitive interface to manage users and requisitions efficiently. It enables smooth workflows with smart notifications and powerful tools, allowing businesses to stay organized and meet deadlines effectively.

By focusing on innovation and user experience, it helps users save time, optimize processes, and drive better results.`,
    keyFeatures: [
      "Authentication, database management, and user/requisition handling",
      "In-app notifications for inactivity and requisition deadlines",
      "Report generation",
      "Search users/requisitions",
      "PO receipt generation with taxation, terms and conditions",
      "Custom receipt template as per client's requirements",
    ],
  },
  {
    name: "iPod Simulator",
    description: "An iPod Simulator made using Vanilla Js",
    techStack: ["HTML", "CSS", "Vanilla JavaScript"],
    thumbnail: iPodSimulator,
    pinned: false,
    livePreviewURL: "https://plushexe351.github.io/iPodSimulator/",
    sourceURL: "https://github.com/plushexe351/iPodSimulator",
    keyFeatures: [
      "Sleep / Wake with animated bootscreen",
      "Play and browse through songs with an iPod-like experience",
      "Use buttons on screen to Forward/Previous/Play/Pause/Shuffle songs",
      "Keyboard support available (check the how-to-use panel on the website for key bindings)",
      "iPod sleeps when user's focus goes away from browser or changes tab",
    ],
    about: `iPodSimulator offers an immersive iPod-like experience with a fully responsive design. Users can play, browse, and control songs with ease, featuring on-screen buttons and keyboard support. It even goes to sleep when the browser loses focus, ensuring a seamless experience on any device.
`,
  },
  {
    name: "Etch a Sketch",
    description: "A Pixel Art Making Website",
    techStack: ["HTML", "CSS", "Vanilla JavaScript"],
    thumbnail: etchasketch,
    pinned: false,
    livePreviewURL: "https://plushexe351.github.io/Etch-a-Sketch/",
    sourceURL: "https://github.com/plushexe351/Etch-a-Sketch",
    keyFeatures: [
      "Fully responsive",
      "Multiple pen modes",
      "GreyScale mode",
      "Eraser mode",
      "Change number of cells",
      "Custom pen color and background color",
      "Enable and disable grid view",
    ],
    about:
      "Etch-a-Sketch is a simple yet fun drawing app that offers a responsive and interactive experience. With multiple pen modes, grayscale and eraser options, and customizable settings for pen color and grid view, users can create unique sketches. Adjust the number of cells and enjoy endless creativity with every stroke.",
  },
  {
    name: "Flappy Bird",
    description: "A Simple Flappy Bird game made using HTML Canvas",
    techStack: ["HTML", "CSS", "HTML 5 Canvas"],
    thumbnail: flappyBird,
    pinned: false,
    livePreviewURL: "https://plushexe351.github.io/FlappyBird/",
    sourceURL: "https://github.com/plushexe351/FlappyBird",
    about:
      "Relive your childhood with this Flappy Bird game made using HTML, CSS and JavaScript. It works for both computer and mobile devices. Click, tap or press Spacebar to start the game, flap or restart the game.",
  },
];

const getProject = (name) => {
  return (
    projects.find(
      (project) => project.name.toLowerCase() === name.toLowerCase()
    ) || null
  );
};

export { certificates, projects, getProject };
