import React, { useState } from "react";
import Project from "../Project";
import projects from "../../projects.json";

function Portfolio() {
  const [projectsList] = useState(projects);

  return (
    <section id="work">
      <div className="intro">
        <h3>Portfolio</h3>
      </div>
      <div className="guts">
        {/* <!-- cards to display projects --> */}
        {projectsList.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            name={project.name}
            appLink={project.appLink}
            gitHubLink={project.gitHubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
