import React from 'react'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import gitHub from '../assets/images/github-icon.png';
import linkedin from '../assets/images/linkedin-icon.png';

function Contact() {
    return (
        <div>
            <div className="title">Contact Me</div>
            <div className="contact-info">
                <h1><PhoneOutlinedIcon fontSize="large" /> 936-657-9148 | <EmailOutlinedIcon fontSize="large" /> Wilsonandrew57@gmail.com</h1>
                <a href="https://github.com/andwilson36" target="_blank"><img className="icon" src={gitHub} /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.linkedin.com/in/andrewwilsonjs/" target="_blank"><img className="icon" src={linkedin} /></a>
            </div>
        </div>
    )
}

export default Contact
