import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./home.scss";

const Home = () => {
  return (
    <main id="home" className="bg-img">
      <div className="inner-container">

      <h1 className="lg-heading">
        Vilmos <span className="text-secondary">Csibi</span>
      </h1>
      <h2 className="sm-heading">In case you need a fast, reliable and secure website.</h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/vilmos-csibi/">
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-2x" />
        </a>
        <a href="https://github.com/csibivili">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
      </div>
      </div>
    </main>
  );
};

export default Home;
