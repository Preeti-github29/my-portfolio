import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        
      </div>

      <div className="contact-right">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:Impreetisingh14@gmail.com">Impreetisingh14@gmail.com</a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href="https://github.com/Preeti-github29" target="_blank" rel="noopener noreferrer">github.com/Preeti-github29</a>
        </div>

        

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+1 (470) 920-3737</span>
        </div>
      </div>
    </div>
  );
}
