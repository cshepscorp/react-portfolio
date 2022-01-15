import React from "react";
function Resume() {
  return (
    <section id="about">
      <div class="intro">
        <h3>Resume</h3>
      </div>
      <div class="guts">
        <div class="resume">
        <h3>
          <a href="https://github.com/cshepscorp/react-portfolio/blob/main/public/Resume-Christy-Sheppard.pdf">
            Download
          </a>{" "}
          my Resume
        </h3>
          <h3>Technical Skills</h3>
          <h4>Frontend:</h4>
          <ul>
            <li>React</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>WordPress</li>
            <li>Shopify</li>
          </ul>
          <h4>Backend:</h4>
          <ul>
            <li>MySQL</li>
            <li>Express</li>
            <li>Node-js</li>
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
