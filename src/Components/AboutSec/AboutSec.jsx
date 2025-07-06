import React from 'react';
import './AboutSec.css'
import logo_l6 from '../../assets/l6.jpeg';
import logo_l12 from '../../assets/l12.JPG';
import logo_github from '../../assets/github.svg';
import logo_linkedin from '../../assets/linkedin-black.svg';
import logo_gmail from '../../assets/gmail-black.svg';
import { ChevronDown, Download } from 'lucide-react';

const AboutSec = ({ theme }) => {

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('experience');
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (

        <div className={`about_sec ${theme}`}>

            <div className='_imgAS'>
                <div>
                    <img src={theme === 'dark' ? logo_l12 : logo_l6}  alt='profile picture' className='_logoAS' />
                </div>
                <div className='_socials'>
                    <a href="https://www.linkedin.com/in/tanishqparmar" target="_blank" rel="noopener noreferrer">
                        <img src={logo_linkedin} alt='Linkedin' className='_iconSocial' />
                    </a>
                    <a href="https://github.com/parmartanishq" target="_blank" rel="noopener noreferrer">
                        <img src={logo_github} alt='GitHub' className='_iconSocial' />
                    </a>
                    <a href="mailto:parmartanishq.work@gmail.com">
                        <img src={logo_gmail} alt='Email' className='_iconSocial' />
                    </a>
                </div>

            </div>
            <div className='_text'>
                <div className='_about'>
                    <h1>Tanishq Parmar</h1>
                    <h2>Full Stack Developer | AI-ML Engineer | Data Science</h2>
                    <p>B.Tech student in AI and Data Science with a focus on practical, user-driven solutions. Builds intelligent systems like PaperGen that combine machine learning, backend development, and clean UI design.</p>
                </div>
                <div className='_buttonResume'>
                    <Download size={18} style={{ color: 'white' }} />
                    <a href="/files/TanishqParmarResume.pdf" download={'TanishqParmar_Resume'} target='_blank' rel='noopener noreferrer'>
                        <span>Resume</span>
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator - Desktop Only */}
            <div className='_scroll-indicator' onClick={scrollToNextSection}>
                <span className='_scroll-text'>Scroll down</span>
                <ChevronDown className='_scroll-arrow' />
            </div>

        </div>

    );
};

export default AboutSec;