import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      {/* <!-- site logo graphic and or main text logo --> */}
      <h1>
        <NavLink to="/about" activeClassName="navActive">
          Christy Sheppard
        </NavLink>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/about" activeClassName="navActive">
              About Me
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/portfolio" activeClassName="navActive">
              Portfolio
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/resume" activeClassName="navActive">
              Resume
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/contact" activeClassName="navActive">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
