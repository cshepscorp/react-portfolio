import React from "react";
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Hero></Hero>
        <About></About>
        <Portfolio></Portfolio>

      </main>
    </div>
  );
}

export default App;
