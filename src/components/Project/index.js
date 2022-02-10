import React from "react";

function Project(props) {
  return (
    <div className="card" backgroundImage>
      <a href={props.appLink}>
        <img alt={props.name} src={props.image} width="100%" />
      </a>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Tech Used: {props.tech}</p>
      <p>
        <a href={props.appLink}>
          <i className="fa fa-external-link"></i> Deployed App
        </a>
      </p>
      <p>
        <a href={props.gitHubLink}>
          <i className="fa fa-github-square"></i> GitHub Repo
        </a>
      </p>
    </div>
  );
}

export default Project;
