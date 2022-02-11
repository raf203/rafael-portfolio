import React from "react";

function ProjectList(props) {
    const { projects = [] } = props;
 
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h3>{project.title}</h3>
            <img
              src={require(`../../assets/${project.image}`)}
            ></img>
            <a href={project.deployed} target="_blank">
              {" "}
              deployed application
            </a>
            <a href={project.repo} target="_blank">
              repo
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;