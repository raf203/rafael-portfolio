import React from "react";
import resumeIcon from "../../assets/letter.png";

function Resume() {
  return (
    <section>
      <h1 className="contact">Resume</h1>
      <h5 className="project-title">Proficiencies</h5>
      <div className="proficiencies">
    
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Express.js</li>
        <li>PWA</li>
        </ol>
    
        <ol>
        <li>API</li>
        <li>React</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Node.js</li>
      </ol>
      
      </div>
     
      <a href={require("../../assets/Rafael-resume.pdf")} download>
          <div className = "icon-container">
      <img src={resumeIcon} className="icon" alt="icon" />
      </div>
        <h4 className="project-title">Click here to download my resume</h4>
        </a>
     
    </section>
  );
}

export default Resume;