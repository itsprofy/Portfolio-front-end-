import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
  ecommerce,
  facialRecognition,
  phoneApp,
  vest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "ML Engineer",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with Spring Boot backend and React frontend, featuring complete shopping cart functionality and user authentication.",
    features: [
      "User authentication and authorization with Spring Security.",
      "Product catalog with search and filtering capabilities.",
      "Shopping cart and checkout process.",
      "Admin panel for product management.",
      "RESTful API integration between frontend and backend.",
    ],
    tags: [
      {
        name: "SpringBoot",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Java",
        color: "orange-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/itsprofy/E-Commerce-Spring-boot-and-react-project",
    live_link: "https://github.com/itsprofy/E-Commerce-Spring-boot-and-react-project",
  },
  {
    name: "Vest Detection ML",
    description:
      "A machine learning project for detecting safety vests in images, useful for workplace safety monitoring and compliance.",
    features: [
      "Real-time vest detection using computer vision.",
      "Trained on custom dataset for high accuracy.",
      "Can be integrated into safety monitoring systems.",
      "Image preprocessing and augmentation pipeline.",
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
    ],
    image: vest,
    source_code_link: "https://github.com/itsprofy/Vest-Detection",
    live_link: "https://github.com/itsprofy/Vest-Detection",
  },
  {
    name: "Hand Gesture Recognition",
    description:
      "A machine learning project that recognizes and classifies hand gestures using computer vision, enabling touchless interaction systems.",
    features: [
      "Real-time hand gesture detection and classification.",
      "Multiple gesture recognition capabilities.",
      "Built using deep learning frameworks.",
      "Jupyter notebook with detailed implementation.",
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "Jupyter",
        color: "orange-text-gradient",
      },
    ],
    image: "https://user-images.githubusercontent.com/37477845/102222442-c452cd00-3f26-11eb-93ec-c387c98231be.gif",
    source_code_link: "https://github.com/itsprofy/HAND-GESTURE-PROJECT",
    live_link: "https://github.com/itsprofy/HAND-GESTURE-PROJECT",
  },
  {
    name: "Facial Expression Recognition",
    description:
      "A deep learning project that detects and classifies facial expressions in real-time, useful for emotion analysis and interactive applications.",
    features: [
      "Real-time facial expression detection.",
      "Multiple emotion classification (happy, sad, angry, etc.).",
      "Deep learning model trained on facial expression datasets.",
      "Interactive Jupyter notebook implementation.",
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "Jupyter",
        color: "orange-text-gradient",
      },
    ],
    image: facialRecognition,
    source_code_link: "https://github.com/itsprofy/Facial-Expression-Recognition",
    live_link: "https://github.com/itsprofy/Facial-Expression-Recognition",
  },
  {
    name: "Mobile Phone App",
    description:
      "A cross-platform mobile application built with Flutter and Dart, integrated with Firebase for backend services and real-time data synchronization.",
    features: [
      "Cross-platform support for iOS and Android.",
      "Firebase authentication and real-time database.",
      "Modern UI/UX with Flutter widgets.",
      "Cloud storage integration.",
      "Push notifications support.",
    ],
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: phoneApp,
    source_code_link: "https://github.com/itsprofy/Phone-app-using-dart-flutter-and-firebase",
    live_link: "https://github.com/itsprofy/Phone-app-using-dart-flutter-and-firebase",
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  //  experiences,
  //  testimonials,
  projects,
};
