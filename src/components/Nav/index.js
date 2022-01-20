import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {

  return (
    <header>
      {/* <!-- site logo graphic and or main text logo --> */}
      <h1>
      <Link to="/">Christy Sheppard</Link>
      </h1>
      <nav>
        <ul>
          <li>
          <Link to="/about">About Me</Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to="/resume">Resume</Link>
          </li>
        </ul>
        <ul>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
