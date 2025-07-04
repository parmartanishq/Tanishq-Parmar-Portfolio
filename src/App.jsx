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

const App = () => {
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(true);

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
        </>
    )
}

export default App