import React from 'react';
import './Publications.css'
import logo_external_link from "../../assets/logo_external_link.svg";

const _Publications = ({title,date,type,description,link}) => {
    return (
        <>
            <a href={`${link}`} target='_blank' rel='noopener noreferrer' className='_certiLink'>
                <div className='_publicCard'>
                    <div className='_externalIcon'>
                        <img src={logo_external_link} alt="external link" />
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <h4 > Date: {date} | Publication Type: {type} Paper</h4>
                    </div>
                    <div className='_publicDescribe' >
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </>
    )
}

const publicationData = [
    {
        title: 'Biometrics RFID Identification System - Attendance System',
        date: 'January 2024',
        type: 'Research',
        link: 'https://drive.google.com/file/d/1WJuBRn7srDL4RLrmP377sMpzWtv9dtIj/view?usp=sharing',
        description: 'To address irregular attendance and outdated manual methods, a Biometric RFID-based attendance system is introduced. It combines fingerprint scanning with RFID cards, ensuring accurate and secure identification. The system offers real-time attendance tracking with precise timestamping and centralized data storage. Applicable in schools and workplaces, it simplifies monitoring while enhancing reliability and efficiency.'
    },
    {
        title: 'Brain Computer Interfacing: Techniques and Challenges',
        date: 'October 2022',
        type: 'Review',
        link: 'https://drive.google.com/file/d/1oNGGUJUnCkHe00saPfCqh5bhQr7bguU7/view?usp=sharing',
        description: 'Brain-Computer Interface (BCI) is a technology that enables direct communication between the brain and external devices by translating neural activity into commands. It uses techniques like implanted or external electrodes to detect brain signals. BCI has proven crucial for patients with conditions like locked-in syndrome and ALS, improving communication and quality of life. Advancements have made BCI increasingly user-friendly and accessible.'
    },
]

const Publications = () => {
  return (
    <div className="public_sec">
        <div className="_header">
            <span className='_heading'>Publications</span>
        </div>
        <div className='_publications'>
           <div className='_publication'>
               {publicationData.map((paper, index) => (
                  <_Publications
                    key={index}
                    title={paper.title}
                    date={paper.date}
                    type={paper.type}
                    link={paper.link}
                    description={paper.description}
                  />
               ))}
           </div>
        </div>
    </div>
  );
};

export default Publications;
