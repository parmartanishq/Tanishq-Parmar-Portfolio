import React from 'react';
import './AboutSec.css'
import logo_l6 from '../../assets/l6.jpeg';
import logo_github from '../../assets/github.svg';
// import logo_download from '../../assets/download.svg';
import logo_linkedin from '../../assets/linkedin-black.svg';
import logo_gmail from '../../assets/gmail-black.svg';
const AboutSec = () => {
    return (

        <div className= 'about_sec'>


            <div className='_imgAS'>
                <div>
                    <img src={logo_l6}  alt='profile picture' className='_logoAS' />
                </div>
                <div className='_socials'>
                    <img  src={logo_linkedin} alt='Linkedin' className='_iconSocial' />
                    <img src={logo_github} alt='GitHub' className='_iconSocial' />
                    <img src={logo_gmail} alt='Email' className='_iconSocial' />
                </div>
            </div>
            <div className='_text'>
                <div className='_about'>
                    <h1>Tanishq Parmar</h1>
                    <h2>Full Stack Developer | AI-ML Engineer | Data Science</h2>
                    <p>B.Tech student in AI and Data Science with a focus on practical, user-driven solutions.Builds intelligent systems like PaperGen that combine machine learning, backend development, and clean UI design.</p>
                </div>
                <div className='_buttonResume'>
                    {/*<div >*/}
                    {/*    <img src={logo_download} className='_downResume' style={{ width: '22px', height: '20px' }} />*/}
                    {/*</div>*/}
                    <span>
                    Resume
                </span>
                </div>
            </div>

        </div>

    );
};

export default AboutSec;
