import React from "react";

function Project(props) {
  return (
      <div class="card">
          <img alt={props.name} src={props.image} />
          <h4>{props.name}</h4>
          <p><a href={props.appLink}>Deployed App</a></p>
          <p><a href={props.gitHubLink}>GitHub Repo</a></p>
      </div>
  );
}

export default Project;
