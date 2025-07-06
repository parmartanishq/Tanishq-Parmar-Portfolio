import React, { useState, useEffect } from 'react';
import './Navbar.css'
import logo_light from '../../assets/light-mode.svg';
import logo_dark from '../../assets/dark-mode.svg';
import logo_home from '../../assets/logo_home.png';


const Navbar = ({theme, toggleTheme}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking
        setIsMenuOpen(false);
    }

    const navItems = [
        { name: "Home", id: "home" },
        { name: 'Experience', id: 'experience' },
        { name: 'Skills', id: 'skills' },
        { name: 'Certifications', id: 'certification' },
        { name: 'Projects', id: 'projects' },
        { name: 'Awards', id: 'awards' },
        { name: 'Contact', id: 'contact' }
    ];

    // Scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial active section

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navigation */}
            <div className={`navbar ${theme === 'dark' ? 'dark' : ''}`}>
                <div>
                    <img src={logo_home} alt="Logo" className='_logo'/>
                    {/*<text className='_txt'>Tanishq Parmar</text>*/}
                </div>

                {/* Desktop Navigation */}
                <div className='_nav-desktop'>
                    <ul className='_nav'>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={activeSection === item.id ? 'active' : ''}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='icon-white'>
                    <img
                        onClick={toggleTheme}
                        src={theme === 'light' ? logo_light : logo_dark}
                        alt="Theme toggle"
                        className='_toggle-icon'
                    />
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className={`_mobile-bottom-nav ${theme === 'dark' ? 'dark' : ''}`}>
                <div className='_mobile-bottom-nav-content'>
                    {/* Logo - EXTREME LEFT */}
                    <div className='_mobile-logo'>
                        <img src={logo_home} alt="Logo" />
                    </div>

                    {/* Right side container - Theme Toggle and Menu Button */}
                    <div className='_mobile-right-buttons'>
                        {/* Theme Toggle - LEFT OF MENU BUTTON */}
                        <div className='_mobile-toggle'
                             onClick={() => {toggleTheme()}}>
                            <img src={theme === 'light' ? logo_light : logo_dark}
                                 alt="Theme toggle"/>
                        </div>

                        {/* Menu Button - EXTREME RIGHT */}
                        <div className='_mobile-menu-btn' onClick={toggleMenu}>
                            <div className={`_hamburger ${isMenuOpen ? '_hamburger-open' : ''}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`_nav-mobile ${isMenuOpen ? '_nav-mobile-open' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
                <div className='_nav-mobile-content'>
                    <ul>
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className={activeSection === item.id ? 'active' : ''}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar