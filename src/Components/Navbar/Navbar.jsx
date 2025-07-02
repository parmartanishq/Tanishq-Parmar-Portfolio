import React from 'react';
import './Navbar.css'
import logo_light from '../../assets/light-mode.svg';
import logo_dark from '../../assets/dark-mode.svg';
import logo_home from '../../assets/logo_home.png';
const Navbar = ({theme, setTheme}) => {

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className='navbar'>

        <div>
            <img src={logo_home} alt="" className='_logo'/>
            {/*<text className='_txt'>Tanishq Parmar</text>*/}
        </div>
        <div>
            <ul className='_nav'>
                <li>Experience</li>
                <li>Skils</li>
                <li>Projects</li>
                <li>Contact </li>
            </ul>
        </div>
        <div>
            <img onClick={() => {toggleTheme()}} src={theme === 'light'? logo_light:logo_dark} alt="" className='_toggle-icon'/>

        </div>
    </div>
  )
}

export default Navbar
