import React, { useState } from "react";
import "./App.css";
// react router
// BrowserRouter and Route are components that the React Router library provides. We renamed BrowserRouter to Router to make it easier to work with.
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true); //

  return (
    <div>
      <Router>
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          portfolioSelected={portfolioSelected}
          setPortfolioSelected={setPortfolioSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
        ></Nav>
        <main>
          <div className="container">
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/Contact" component={ContactForm} />
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
