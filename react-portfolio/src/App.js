import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
