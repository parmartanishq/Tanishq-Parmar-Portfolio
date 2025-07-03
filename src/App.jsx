import React, { useState } from 'react'
// import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import AboutSec from "./Components/AboutSec/AboutSec";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Certificates from "./Components/Certificates/Certificates";
import Publications from "./Components/Publications/Publications";
import Awards from "./Components/Awards/Awards";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

const App = () =>  {
    const [theme, setTheme] = useState('light');
  return (
    <section className={`container ${theme}`}>

      <section>
        <Navbar theme={theme} setTheme={setTheme} />
      </section>
        <section id="home">
            <AboutSec />
        </section>

        <section id="experience">
            <Experience />
        </section>

        <section id="skills">
            <Skills />
        </section>

        <section id="certification">
            <Certificates />
        </section>

        <section id="publications">
            <Publications />
        </section>

        <section id="projects">
            <Projects />
        </section>

        <section id="awards">
            <Awards />
        </section>

        <section id="contact">
            <Footer />
        </section>

    </section>

  )
}

export default App
