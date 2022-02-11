import React from "react";

function ProjectList(props) {
    const { projects = [] } = props;
 
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.title} className="card-project">
            <h3 className="project-title">{project.title}</h3>
            <img
              src={require(`../../assets/${project.image}`)} a href= {project.deployed}
            ></img>
            <div className="links">
            <a href={project.deployed} target="_blank">
              {" "}
              Application
            </a>
           
            <a href={project.repo} target="_blank">
              Repository
            </a>
            </div>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;