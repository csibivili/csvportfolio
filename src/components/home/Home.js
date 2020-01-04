import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFreeCodeCamp
} from "@fortawesome/free-brands-svg-icons";
import "./home.scss";

const Home = () => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Vilmos <span className="text-secondary">Csibi</span>
      </h1>
      <h2 className="sm-heading">Web Developer, Programmer</h2>
      <div className="icons">
        <a href="https://fontawesome.com/icons/github?style=brands">
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-2x" />
        </a>
        <a href="https://fontawesome.com/icons/github?style=brands">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
        <a href="https://fontawesome.com/icons/github?style=brands">
          <FontAwesomeIcon icon={faFreeCodeCamp} className="fa-2x" />
        </a>
      </div>
    </main>
  );
};

export default Home;
