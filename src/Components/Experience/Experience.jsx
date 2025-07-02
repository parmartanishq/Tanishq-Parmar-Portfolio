import React from 'react';
import './Experience.css';
import { useState, useEffect } from 'react';

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

const Experience = () => {
    const isMobile = useIsMobile(768);

    const experienceData = [
        {
            title: 'Android Development Intern',
            company: 'DeveloperOnGo Pvt. Ltd.',
            date: 'June - July 2023',
            location: 'Navi Mumbai',
        },
        {
            title: 'Java Programming Intern',
            company: 'InternPe',
            date: 'April 2023',
            location: 'Remote',
        },
        {
            title: 'Android Development Intern',
            company: 'DeveloperOnGo Pvt. Ltd.',
            date: 'June - July 2023',
            location: 'Navi Mumbai',
        },
        {
            title: 'Java Programming Intern',
            company: 'InternPe',
            date: 'April 2023',
            location: 'Remote',
        },
    ];

    return (
        <div className="exp_sec">
            <div className="_header">
                <span className='_heading'>Experience</span>
                <span className='_heading'>Education</span>
            </div>
            <span className='_expDecor'>
                <div className="_expSpan">
                    {experienceData.map((item, index) => (
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
    );
};

export default Experience;