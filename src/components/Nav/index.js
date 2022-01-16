import React from "react";

function Nav(props) {
  const { contactSelected, setContactSelected } = props;
  const { portfolioSelected, setPortfolioSelected } = props;
  const { resumeSelected, setResumeSelected } = props;
  const { aboutSelected, setAboutSelected } = props;
  return (
    <header>
      {/* <!-- site logo graphic and or main text logo --> */}
      <h1>
        <a href="/" 
          onClick={() => {
            setContactSelected(false);
            setAboutSelected(false);
            setResumeSelected(false);
            setPortfolioSelected(false);
          }}
        >
          Christy Sheppard
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about"
              className={`${aboutSelected && "navActive"}`}
              onClick={() => {
                setContactSelected(false);
                setAboutSelected(true);
                setResumeSelected(false);
                setPortfolioSelected(false);
              }}
            >
              About Me
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#portfolio"
              className={`${portfolioSelected && "navActive"}`}
              onClick={() => {
                setContactSelected(false);
                setAboutSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(true);
              }}
            >
              Portfolio
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#resume"
              className={`${resumeSelected && "navActive"}`}
              onClick={() => {
                setContactSelected(false);
                setAboutSelected(false);
                setResumeSelected(true);
                setPortfolioSelected(false);
              }}
            >
              Resume
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#contact"
              className={`${contactSelected && "navActive"}`}
              onClick={() => {
                setContactSelected(true);
                setAboutSelected(false);
                setResumeSelected(false);
                setPortfolioSelected(false);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
