// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Yogesh Yadav",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "My name is Yogesh Yadav. I am an IT Engineer based in New Delhi, India. I delineate myself as a problem solver and passionate developer who loves open source and UX Designing.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "C++",
    faClass: "fas fa-code",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "Figma",
    faClass: "fab fa-figma",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Report Analyzer",
    skills: ["React, ML, BlockChain"],
    url: "https://github.com/yogeshyadav1998/Btech-Project-Ml-Blockchain-Web",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Grain Market",
    skills: ["React, Redux"],
    url: "https://github.com/yogeshyadav1998/React-Farmington",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Scroll Animator",
    skills: ["React, Next, Spring"],
    url: "https://github.com/yogeshyadav1998/React-scroll-animation",
  }
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Blood Help India",
    url: "https://github.com/yogeshyadav1998/React-Bloodhelpindia",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Sukhoi Mikoyan",
    url: "https://github.com/yogeshyadav1998",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Covid Traker",
    url: "https://github.com/yogeshyadav1998/Covid19-Application",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "It is good to stock and Learn from better.",
  copyright: "Yogesh Yadav",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/yogeshyadav1998",
  facebook: "https://www.facebook.com/profile.php?id=100005275305951",
  linkedin: "https://www.linkedin.com/in/yogesh-yadav-10514b171",
  instagram: "https://www.instagram.com/_.yogesh.ydv._/",
  resume: "https://drive.google.com/file/d/1dTvpqoN8pr2v5RyiCBR7v_JqMGAjE0Fm/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
