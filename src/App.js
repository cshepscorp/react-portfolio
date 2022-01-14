
import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false); // prevent the contact form from showing when a user initially navigates to the homepage

  return (
    <div>
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
        {!contactSelected && !portfolioSelected && !resumeSelected ? (
          <>
            <Hero></Hero>
            <About></About>
          </>
        ) : (
          <></>
        )}
        {contactSelected ? <Contact></Contact> : <></>}
        {portfolioSelected ? <Portfolio></Portfolio> : <></>}
        {resumeSelected ? <Resume></Resume> : <></>}

export default App;
