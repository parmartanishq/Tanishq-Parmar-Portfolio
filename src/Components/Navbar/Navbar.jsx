import React, { useState } from 'react';
import './Navbar.css'
import logo_light from '../../assets/light-mode.svg';
import logo_dark from '../../assets/dark-mode.svg';
import logo_home from '../../assets/logo_home.png';


const Navbar = ({theme, setTheme}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

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
        { name: 'Experience', id: 'experience' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <div className='navbar'>
                <div>
                    <img src={logo_home} alt="Logo" className='_logo'/>
                    {/*<text className='_txt'>Tanishq Parmar</text>*/}
                </div>

                {/* Desktop Navigation */}
                <div className='_nav-desktop'>
                    <ul className='_nav'>
                        {navItems.map((item, index) => (
                            <li key={index} onClick={() => scrollToSection(item.id)}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <img
                        onClick={() => {toggleTheme()}}
                        src={theme === 'light' ? logo_light : logo_dark}
                        alt="Theme toggle"
                        className='_toggle-icon'
                    />
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className='_mobile-bottom-nav'>
                <div className='_mobile-bottom-nav-content'>
                    {/* Logo - EXTREME LEFT */}
                    <div className='_mobile-logo'>
                        <img src={logo_home} alt="Logo" />
                    </div>

                    {/* Right side container - Theme Toggle and Menu Button */}
                    <div className='_mobile-right-buttons'>
                        {/* Theme Toggle - LEFT OF MENU BUTTON */}
                        <div
                            className='_mobile-toggle'
                            onClick={() => {toggleTheme()}}
                        >
                            <img
                                src={theme === 'light' ? logo_light : logo_dark}
                                alt="Theme toggle"
                            />
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
            <div className={`_nav-mobile ${isMenuOpen ? '_nav-mobile-open' : ''}`}>
                <div className='_nav-mobile-content'>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} onClick={() => scrollToSection(item.id)}>
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