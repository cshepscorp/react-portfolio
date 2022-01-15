import React from "react";

function Project(props) {
  return (
    <div class="card" backgroundImage>
      <img alt={props.name} src={props.image} width="100%" />
      <h3>{props.name}</h3>
      <p>
        <a href={props.appLink}>Deployed App</a>
      </p>
      <p>
        <a href={props.gitHubLink}>GitHub Repo</a>
      </p>
    </div>
  );
}

export default Project;
