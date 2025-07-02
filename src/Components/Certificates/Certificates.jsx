import React from 'react';
import './Certificates.css'
import './testing.css'
import logo_frontend from "../../assets/logo_frontend.svg";
import logo_external_link from "../../assets/logo_external_link.svg";

const _Certificates = ({title,course_by,description,link}) => {
    return (
       <>
           <a href={`${link}`} target='_blank' rel='noopener noreferrer' className='_certiLink'>
               <div className='_certiCard'>
                   <div className='_externalIcon'>
                       <img src={logo_external_link} alt="external link" />
                   </div>
                   <div>
                       <h2>{title}</h2>
                       <h3>By {course_by}</h3>
                       <span>{description}</span>
                   </div>
               </div>
           </a>
       </>
    )
}
const Certificates = () => {

    const certificateData = [
        {
            title: 'Crash Course on Python',
            course_by: 'Google',
            description: 'Acquired foundational Python programming skills and hands-on coding experience.',
            link: 'https://www.coursera.org/account/accomplishments/certificate/N7WNDEDSRQWY'
        },
        {
            title: 'Troubleshooting and Debugging Techniques',
            course_by: 'Google',
            description: 'Learned advanced debugging strategies and problem-solving approaches for efficient error resolution.',
            link: 'https://www.coursera.org/account/accomplishments/certificate/LBC2S9EYFSEW',
        },
        {
            title: 'Using Python to Interact with the Operating System',
            course_by: 'Google',
            description: 'Mastered Python automation techniques for managing operating system tasks.',
            link: 'https://www.coursera.org/account/accomplishments/certificate/85Y4M7M64FSR',
        },
        {
            title: 'PCB Designing and Fabrication',
            course_by: 'PEL Electronics Pvt. Ltd.',
            description: 'Gained expertise in PCB designing, soldering, and circuit fabrication techniques. ',
            link: 'https://drive.google.com/file/d/10yKvuU86UddZu7t-kluUnsHdhfH-H5UX/view?usp=sharing',
        },
    ]
  return (
    <div className={'certi_sec'}>
        <div className="_header">
            <span className='_heading'>Certificates</span>
        </div>
        <div className={'_certificates'}>
            <div className='_certificate'>
                {certificateData.map((certificate, index) => (
                    < _Certificates
                        key={index}
                        title={certificate.title}
                        course_by={certificate.course_by}
                        description={certificate.description}
                        link={certificate.link}
                    />
                ))}
            </div>

        </div>
    </div>

  );
};

export default Certificates;
