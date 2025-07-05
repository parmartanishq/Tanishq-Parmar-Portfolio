import React from 'react';
import './Experience.css';
import { useState, useEffect } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

function useIsMobile(maxWidth = 768) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= maxWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [maxWidth]);

    return isMobile;
}

const _Experience = ({ title, company, date, location, left, isMobile }) => {
    // For mobile, always show vertical layout (timeline on left, card on right)
    if (isMobile) {
        return (
            <div className="_expDiv">
                <div className="_expBor">
                    <span className="_dot"></span>
                    <span className="_line"></span>
                </div>
                <div className="_expCard">
                    <h3>{title}</h3>
                    <span>{company}</span>
                    <div className="_expDate">
                        <p>{date}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        );
    }

    // For desktop, maintain the alternating horizontal layout
    return (
        <div className="_expDiv">
            {left ? (
                <>
                    <div className="_expCard">
                        <h3>{title}</h3>
                        <span>{company}</span>
                        <div className="_expDate">
                            <p>{date}</p>
                            <p>{location}</p>
                        </div>
                    </div>
                    <div className="_expBor">
                        <span className="_dot"></span>
                        <span className="_line"></span>
                    </div>
                </>
            ) : (
                <>
                    <div></div>
                    <div className="_expBor">
                        <span className="_dot"></span>
                        <span className="_line"></span>
                    </div>
                    <div className="_expCard">
                        <h3>{title}</h3>
                        <span>{company}</span>
                        <div className="_expDate">
                            <p>{date}</p>
                            <p>{location}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const Experience = ({ theme }) => {

    const isMobile = useIsMobile(768);
    const [activeTab, setActiveTab] = useState('professional');

    const professionalData = [
        {
            title: 'Android Development Intern',
            company: 'DeveloperOnGo Pvt. Ltd.',
            date: 'June - July 2023',
            location: 'Navi Mumbai',
        },
        {
            title: 'IOT Understanding: Workshop',
            company: ' Electronics Pvt. Ltd.',
            date: 'January 2024',
            location: 'Navi Mumbai',
        },
        {
            title: 'Java Programming Intern',
            company: 'InternPe',
            date: 'April 2023',
            location: 'Remote',
        },

        {
            title: 'Java Programming: Workshop',
            company: 'Shree Lilai Digital Communication Pvt. Ltd.',
            date: 'February 2023',
            location: 'Navi Mumbai',
        },
    ];

    const educationData = [
        {
            title: 'BTech - Artificial Intelligence and Data Science',
            company: 'Shah and Anchor Kutchhi Engineering College',
            date: '2024 - 2027',
            location: 'Chembur, Mumbai',
        },
        {
            title: 'Diploma - Electronics and Computer Engineering',
            company: 'Father Agnel Polytechnic',
            date: '2021 - 2024',
            location: 'Vashi, Navi Mumbai',
        },
        {
            title: "Class Xth",
            company: 'St. Xavier\'s High School',
            date: '2009 - 2021',
            location: 'Airoli, Navi Mumbai',
        },
    ];

    return (
        <div className={`exp_sec ${theme === 'dark' ? 'dark' : ''}`}>

        <div className="_header">
                <span className='_heading'>Experience</span>
            </div>
            <div className={'_subheading'}>
                <span
                    className={activeTab === 'professional' ? 'active' : ''}
                    onClick={() => setActiveTab('professional')}
                >
                    <Briefcase size={20} />
                    Professional
                </span>
                <span
                    className={activeTab === 'education' ? 'active' : ''}
                    onClick={() => setActiveTab('education')}
                >
                    <GraduationCap size={20} />
                    Education
                </span>
            </div>
            <div className="_contentContainer">
                <div className={`_contentSlider ${activeTab === 'education' ? 'showEducation' : ''}`}>
                    <div className="_slideContent professional">
                        <span className='_expDecor'>
                            <div className="_expSpan">
                                {professionalData.map((item, index) => (
                                    <_Experience
                                        key={index}
                                        title={item.title}
                                        company={item.company}
                                        date={item.date}
                                        location={item.location}
                                        left={index % 2 === 0}
                                        isMobile={isMobile}
                                    />
                                ))}
                            </div>
                        </span>
                    </div>
                    <div className="_slideContent education">
                        <span className='_expDecor'>
                            <div className="_expSpan">
                                {educationData.map((item, index) => (
                                    <_Experience
                                        key={index}
                                        title={item.title}
                                        company={item.company}
                                        date={item.date}
                                        location={item.location}
                                        left={index % 2 === 0}
                                        isMobile={isMobile}
                                    />
                                ))}
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;