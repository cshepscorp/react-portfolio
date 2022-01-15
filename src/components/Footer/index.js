import React from "react";

function Footer() {
  return (
    <footer>
      <div class="guts">
        <div class="social">
          <h3>Check me out on:</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/christinasheppard/">
                <i class="fa fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/cshepscorp/">
                <i class="fa fa-github-square"></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.codewars.com/users/cshepscorp">
                <i class="fa fa-github-square"></i> CodeWars
              </a>
            </li>
          </ul>
        </div>
        <div class="contact">
          <h3>Email or call:</h3>
          <ul>
            <li>
              <a href="mailto:sheppard.christy@gmail.com">
                <i class="fa fa-envelope-square"></i> sheppard dot christy [at]
                gmail
              </a>
            </li>
            <li>
              <a href="tel:18049281876">
                <i class="fa fa-phone-square"></i> 804-928-1876
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
