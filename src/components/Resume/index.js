import React from "react";
function Resume() {
  return (
    <section id="about">
      <div className="intro">
        <h3>Resume</h3>
      </div>
      <div className="guts">
        <div className="resume">
          <h3>
            <a href="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/Resume-Christy-Sheppard.pdf">
              <i className="fa fa-download"></i> Download my Resume
            </a>
          </h3>
          <h3>Technical Skills</h3>
          <h4>Frontend:</h4>
          <ul>
            <li>React</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>JQuery</li>
            <li>WordPress</li>
            <li>Shopify</li>
            <br />
          </ul>
          <h4>Backend:</h4>
          <ul>
            <li>Express</li>
            <li>Node-js</li>
            <li>GraphQL</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>IndexedDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
