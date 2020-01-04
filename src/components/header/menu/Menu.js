import React from "react";
import "./menu.scss";

const Menu = ({ open }) => {
  return (
    <nav className={"menu" + (open ? " show" : "")}>
      <div className={"menu-branding" + (open ? " show" : "")}>
        <div className="portrait"></div>
      </div>
      <ul className={"menu-nav" + (open ? " show" : "")}>
        <li className={"nav-item current" + (open ? " show" : "")}>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className={"nav-item" + (open ? " show" : "")}>
          <a href="/" className="nav-link">
            About Me
          </a>
        </li>
        <li className={"nav-item" + (open ? " show" : "")}>
          <a href="/" className="nav-link">
            My Work
          </a>
        </li>
        <li className={"nav-item" + (open ? " show" : "")}>
          <a href="/" className="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
