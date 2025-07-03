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
    <div className={`container ${theme}`}>

      <div >
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
      <div>
          <AboutSec />
      </div>
        <div>
            <Experience />
        </div>
      <div>
          <Skills />
      </div>
      <div>
          <Certificates />
      </div>
      <div>
          <Publications />
      </div>
        <div>
            <Projects />
        </div>
      <div>
          <Awards/>
      </div>
      <div>
          <Footer/>
      </div>
    </div>

  )
}

export default App
