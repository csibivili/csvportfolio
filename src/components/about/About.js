import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChalkboardTeacher, faCubes, faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './about.scss';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="about">
      <div className="inner-container back">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} className="fa-2x" />
          Back to home
        </Link>
      </div>

      <div className="inner-container content">
        <div className="role-card">
          <div className="role-card-icon">
            <FontAwesomeIcon icon={faLaptopCode} className="fa-6x" />
          </div>
          <h2 className="role-card-title">Developer</h2>
          <p className="role-card-content">
            I started my career in software development more than 3 years ago. During the years I have tried out
            multiple technologies. As a freelancer I like to work with <a href="https://jamstack.org/">JAMSTACK</a>.
          </p>
        </div>

        <div className="role-card">
          <div className="role-card-icon">
            <FontAwesomeIcon icon={faCubes} className="fa-6x" />
          </div>
          <h2 className="role-card-title">Entrepreneur</h2>
          <p className="role-card-content">
            I am the co-founder of <a href="https://osteroo.com/">Osteroo</a>. We are trying to revolutionize the gift
            industry with customizable print products.
          </p>
        </div>

        <div className="role-card">
          <div className="role-card-icon">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="fa-6x" />
          </div>
          <h2 className="role-card-title">Mentor</h2>
          <p className="role-card-content">
            Back than I was a career changer. Now that I have confident knowledge in the field I would like to help
            those who are interested in coding. Currently I am working as a part-time mentor in{' '}
            <a href="https://www.greenfoxacademy.com/">Green Fox Academy</a>.
          </p>
        </div>
      </div>

      <div className="inner-container go-to-contact">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default About;
