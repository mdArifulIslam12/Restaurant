
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='footer mt-5'>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                        <h4>&copy; {year} Dhaka Restaurant inc.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;