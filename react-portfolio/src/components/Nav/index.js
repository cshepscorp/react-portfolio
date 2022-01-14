import React from "react";

function Nav() {
  return (
    <header>
      {/* <!-- site logo graphic and or main text logo --> */}
      <h1>
        <a href="/portfolio/">Christy Sheppard</a>
      </h1>
      {/* <!-- site navigation --> */}
      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#work">Portfolio</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#skills">Resume</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
