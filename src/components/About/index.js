import React from "react";

function About() {
  return (
    <section>
      <div className="intro">
        <h3>About Me</h3>
      </div>
      <div className="headshot">
        <img
          src="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/images/hero-headshot-vinyls.png"
          alt="Christina Sheppard headshot"
        />
      </div>
      <div className="guts">
        <h4>Hi, I'm Christy Sheppard</h4>
        <p>
          I am a Full Stack Web Developer utilizing a decade of experience with
          Adobe Graphic Suite and e-commerce management skills to craft and
          design attractive and intuitive user experiences on the web. I've been
          in the workforce for a long time working in front-end web
          development/management and recently decided I'd like to get to know
          all about how the back-end works, too. When I'm tasked with a project
          I'm not 100% sure how to complete - I get excited - and then I get to
          work!
        </p>
      </div>
    </section>
  );
}

export default About;
