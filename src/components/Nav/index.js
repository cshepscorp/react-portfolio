import React from "react";

function Nav(props) {
  const { contactSelected, setContactSelected } = props;
  const { portfolioSelected, setPortfolioSelected } = props;
  const { resumeSelected, setResumeSelected } = props;
  const { aboutSelected, setAboutSelected } = props;
  return (
    <header>
      {/* <!-- site logo graphic and or main text logo --> */}
      <h1 onClick={() => { setContactSelected(false);
                            setAboutSelected(false);
                            setResumeSelected(false);
                             setPortfolioSelected(false)}}>
        <a>Christy Sheppard</a>
      <nav>
        <ul>
          <li onClick={() => { setContactSelected(false);
                                      setAboutSelected(true);
                            setResumeSelected(false);
                             setPortfolioSelected(false)}}>
            <a>About Me</a>
          </li>
        </ul>
        <ul>
        <li onClick={() => { setContactSelected(false);
                                    setAboutSelected(false);
                              setResumeSelected(false);
                             setPortfolioSelected(true)}}>
            <a>Portfolio</a>
          </li>
        </ul>
        <ul>
        <li onClick={() => { setContactSelected(false);
                                    setAboutSelected(false);
                              setResumeSelected(true);   
                             setPortfolioSelected(false)}}>
            <a>Resume</a>
          </li>
        </ul>
        <ul>
          <li
            className={`${contactSelected && "navActive"}`}
            onClick={() => { setContactSelected(true);
              setAboutSelected(false);
              setResumeSelected(false);   
             setPortfolioSelected(false)}}>
            <a>Contact</a>
      </nav>
    </header>
  );
}

export default Nav;
