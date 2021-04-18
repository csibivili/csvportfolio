import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './contact.scss';

const Contact = () => {
  return (
    <div id="contact">
      <div className="inner-container back">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="fa-2x" />
          Back to home
        </Link>
      </div>
      <div className="inner-container content">
        <div className="contact-item">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faPhone} className="fa-2x" />
          </div>
          <div className="contact-value">
            <a href="tel:+36705491632">+36 70 549 16 32</a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
          </div>
          <div className="contact-value">
            <p>csibi.vili@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
