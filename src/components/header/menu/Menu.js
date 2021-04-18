import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";

const Menu = ({ isOpen, close }) => {
  return (
    <nav className={"menu" + (isOpen ? " show" : "")}>
      <div className={"menu-branding" + (isOpen ? " show" : "")}>
        <div className="portrait"></div>
      </div>
      <ul className={"menu-nav" + (isOpen ? " show" : "")}>
        <li className={"nav-item" + (isOpen ? " show" : "")} onClick={close}>
          <NavLink to="/" className="nav-link" activeClassName="current" exact>
            Home
          </NavLink>
        </li>
        <li className={"nav-item" + (isOpen ? " show" : "")} onClick={close}>
          <NavLink to="/about" className="nav-link" activeClassName="current">
            About
          </NavLink>
        </li>
        {/* <li className={"nav-item" + (isOpen ? " show" : "")}>
          <a href="/" className="nav-link">
            My Work
          </a>
        </li> */}
        <li className={"nav-item" + (isOpen ? " show" : "")}>
          <a href="/" className="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
