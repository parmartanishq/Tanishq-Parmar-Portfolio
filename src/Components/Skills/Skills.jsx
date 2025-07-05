import React from 'react';
import './Skills.css'
import logo_frontend from '../../assets/logo_frontend.svg';
import logo_backend from '../../assets/logo_backend.svg';
import logo_tools from '../../assets/logo_tools.svg';

const Skills = ({ theme }) => {
    const front_skills = [
        'React',
        'JavaScript',
        'Html',
        'CSS',
    ]
    return (
        <div className={`skills_sec ${theme === 'dark' ? 'dark' : ''}`}>

            <div className="_header">
                <span className='_heading'>Skills</span>

            </div>
            <div className="_skills">
                <div className = '_skill'>
                    <div className='_skillCard'>
                        <div className='_skillDescribe'>
                            <h4> Front End Technologies </h4>
                            <span> Creating responsive and interactive user interfaces</span>
                            <ul className='_skillList'>
                                {front_skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className= '_skillIcon'>
                            <img src={logo_frontend} alt='Frontend Skills' />
                        </div>
                    </div>
                    <div className='_skillCard'>

                        <div className='_skillDescribe'>
                            <h4> Front End Technologies </h4>
                            <span> Creating responsive and interactive user interfaces</span>
                            <ul className='_skillList'>
                                {front_skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className= '_skillIcon'>
                            <img src={logo_backend} alt='Frontend Skills' />
                        </div>
                    </div>
                    <div className='_centered'>
                        <div className='_skillCard'>

                            <div className='_skillDescribe'>
                                <h4> Front End Technologies </h4>
                                <span> Creating responsive and interactive user interfaces</span>
                                <ul className='_skillList'>
                                    {front_skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className= '_skillIcon'>
                                <img src={logo_tools} alt='Frontend Skills' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>


    );
};

export default Skills;
