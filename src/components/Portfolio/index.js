import React, { useState } from "react";
import ProjectList from "../ProjectList";

function Portfolio() {
    const projects = [
      {
        title: "Property Managers Help Desk",
        image: "help-desk.jpg",
        repo: "https://github.com/raf203/the-help-desk",
        deployed: "https://rg-the-help-desk.herokuapp.com/",
      },
    {
      title: "Project Blasé Blasé",
      image: "work5.jpg",
      repo: "https://github.com/raf203/blase-blase",
      deployed: "https://raf203.github.io/blase-blase/",
    },
    {
      title: "Project Spicy Bites",
      image: "work4.jpg",
      repo: "https://github.com/leticianardi/spicy-bites",
      deployed: "https://spicy-bites.herokuapp.com/",
    },
    {
      title: "HTML Portfolio",
      image: "work2.jpg",
      repo: "https://github.com/raf203/portfolio",
      deployed: "https://raf203.github.io/portfolio/",
    },
  
    {
        title: "Password Generator",
        image: "work6.jpg",
        repo: "https://github.com/raf203/password-generator",
        deployed: "https://raf203.github.io/password-generator/",
      },
      {
        title: "Code Quiz",
        image: "work7.jpg",
        repo: "https://github.com/raf203/code-quiz",
        deployed: "https://raf203.github.io/code-quiz/",
      },
  ];
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Portfolio;