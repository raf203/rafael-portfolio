import React, { useState } from "react";
import ProjectList from "../ProjectList";

function Portfolio() {
    const projects = [
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
      title: "Run Buddy",
      image: "work1.jpg",
      repo: "https://github.com/raf203/run-repo",
      deployed: "https://github.com/raf203/run-repo",
    },
    
  ];
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Portfolio;