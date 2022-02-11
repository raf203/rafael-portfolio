import React from "react";

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
      {/* <a href={require("../../assets/resume.pdf")} download>
        <h4>Resume</h4>
      </a> */}
      
    </section>
  );
}

export default Resume;