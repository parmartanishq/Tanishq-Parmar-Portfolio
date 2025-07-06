import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import AboutSec from "./Components/AboutSec/AboutSec";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Certificates from "./Components/Certificates/Certificates";
import Publications from "./Components/Publications/Publications";
import Awards from "./Components/Awards/Awards";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import ScrollToTopButton from './Components/ScrollToTopButton.jsx';


const App = () => {
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(true);
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        // Scroll to top on page load/reload
        window.scrollTo(0, 0);

        // Reduced loading time to 1.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            {/* Loader */}
            {isLoading && (
                <div className="loader">
                    <div className="loader-content">
                        <div className="loader-spinner">
                            <div className="tea-cup">
                                <div className="cup-body"></div>
                                <div className="cup-handle"></div>
                                <div className="steam">
                                    <div className="steam-line"></div>
                                    <div className="steam-line"></div>
                                    <div className="steam-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content - Original Structure with subtle fade-in */}
            <section className={`container ${theme} ${!isLoading ? 'content-loaded' : ''}`}>
                <section>
                    <Navbar theme={theme} toggleTheme={toggleTheme} />

                </section>

                <section id="home">
                    <AboutSec theme={theme} />
                </section>

                <section id="experience">
                    <Experience theme={theme} />
                </section>

                <section id="skills">
                    <Skills theme={theme} />
                </section>

                <section id="certification">
                    <Certificates theme={theme} />
                </section>

                <section id="publications">
                    <Publications theme={theme}/>
                </section>

                <section id="projects">
                    <Projects theme={theme}/>
                </section>

                <section id="awards">
                    <Awards theme={theme} />
                </section>
                <section id="contact">
                    <Contact theme={theme} />
                </section>
                <section id="contact">
                    <Footer theme={theme} />
                </section>
              <ScrollToTopButton/>


            </section>
        </>
    )
}

export default App