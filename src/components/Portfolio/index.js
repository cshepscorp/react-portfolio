import React from "react";

function Portfolio() {
  return (
    <section id="work">
      <div class="intro">
        <h3>Recent Work</h3>
      </div>
      <div class="guts">
        {/* <!-- cards to display projects --> */}
        <div
          class="card featured"
          onclick="window.open('https://desolate-ridge-10974.herokuapp.com/','mywindow');"
        >
          <h4>Pokegen</h4>
          <p>Skills used: Node.js, Express, Sequelize, JavaScript, Bootstrap</p>
        </div>
        <div
          class="card two"
          onclick="window.open('https://cshepscorp.github.io/lorem-sipsum/','mywindow');"
        >
          <h4>Lorem Sipsum</h4>
          <p>Skills used: JavaScript, HTML, CSS</p>
        </div>
        <div
          class="card three"
          onclick="window.open('https://cshepscorp.github.io/robot-gladiators/','mywindow');"
        >
          <h4>Robot Gladiators</h4>
          <p>Skills used: HTML, JavaScript</p>
        </div>
        <div
          class="card four"
          onclick="window.open('https://cshepscorp.github.io/run-buddy/','mywindow');"
        >
          <h4>Run Buddy</h4>
          <p>Skills used: HTML, CSS, WordPress</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
