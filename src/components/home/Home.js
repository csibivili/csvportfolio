import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import './home.scss';

const Home = () => {
  const [hovered, setHovered] = useState(0);
  return (
    <main id="home" className="bg-img">
      <div className="inner-container">
        <h1 className="lg-heading">
          Vilmos <span className="text-secondary">Csibi</span>
        </h1>
        <h2 className="sm-heading">In case you need more than a template website.</h2>
        <div className="icons">
          <a href="https://www.linkedin.com/in/vilmos-csibi/">
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-2x" />
          </a>
          <a href="https://github.com/csibivili">
            <FontAwesomeIcon icon={faGithub} className="fa-2x" />
          </a>
        </div>
        <a className="down-arrow" href="#about-contact">
          <FontAwesomeIcon icon={faArrowDown} className="fa-3x" />
        </a>
      </div>
      <div id="about-contact" className="inner-container">
        <div className={`left-container ${!hovered ? 'hovered' : ''}`}>
          <Link onMouseOver={() => setHovered(0)} to="/about">
            About
          </Link>
        </div>
        <div className={`right-container ${hovered ? 'hovered' : ''}`}>
          <Link onMouseOver={() => setHovered(1)} to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="inner-container">© {new Date().getFullYear()} Csibi Vilmos EV.</div>
    </main>
  );
};

export default Home;
