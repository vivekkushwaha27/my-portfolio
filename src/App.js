import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}
