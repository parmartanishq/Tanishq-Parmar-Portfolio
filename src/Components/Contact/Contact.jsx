import React from 'react';
import './Contact.css';
import { Mail, MapPin } from 'lucide-react';

const Contact = ({theme}) => {
    return (
        <div className={`contact_sec ${theme === 'dark' ? 'dark' : ''}`}>

        <div className="_contact_header">
                <span className='_contact_heading'>Contact</span>
            </div>

            <div className="_contact_container">
                <div className="_contact_grid">
                    <div className="_contact_card">
                        <div className="_contact_icon_wrapper">
                            <Mail size={24} />
                        </div>
                        <div className="_contact_info">
                            <div className="_contact_label">Email</div>
                            <div className="_contact_value">
                              parmartanishq.work@gmail.com
                            </div>
                        </div>
                    </div>

                    <div className="_contact_card">
                        <div className="_contact_icon_wrapper">
                            <MapPin size={24} />
                        </div>
                        <div className="_contact_info">
                            <div className="_contact_label">Location</div>
                            <div className="_contact_value">
                                Mumbai, Maharashtra, India
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;