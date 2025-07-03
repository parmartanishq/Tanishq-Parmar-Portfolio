import React from 'react';
import './Footer.css';
import logo_github from '../../assets/github.svg';
import logo_linkedin from '../../assets/linkedin-black.svg';
import logo_gmail from '../../assets/gmail-black.svg';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Social Media Icons */}
                <div className="social-icons">
                    <a
                        href="https://linkedin.com/in/tanishqparmar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn Profile"
                    >
                        <img
                            src= {logo_linkedin}
                            alt="LinkedIn"
                            className="social-icon"
                        />
                    </a>

                    <a
                        href="https://github.com/parmartanishq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub Profile"
                    >
                        <img
                            src={logo_github}
                            alt="GitHub"
                            className="social-icon"
                        />
                    </a>

                    <a
                        href="mailto:parmartanishq.work@gmail.com"
                        className="social-link"
                        aria-label="Email Contact"
                    >
                        <img
                            src= {logo_gmail}
                            alt="Email"
                            className="social-icon"
                        />
                    </a>
                </div>

                {/* Footer Content */}
                <div className="footer-content">
                    <div className="footer-text">
                        <p className="footer-name">Tanishq Parmar</p>
                        <p className="footer-subtitle">Full Stack Developer | AI-ML Engineer | Data Science</p>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © {new Date().getFullYear()} Tanishq Parmar.
                        </p>
                        {/*<p className="footer-tagline">*/}
                        {/*    Crafted with passion and precision*/}
                        {/*</p>*/}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;