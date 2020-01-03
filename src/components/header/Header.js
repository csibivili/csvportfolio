import React, { Component } from "react";
import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  onMenuBtnClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <header>
        <div
          className={"menu-btn" + (this.state.open ? " close" : "")}
          onClick={this.onMenuBtnClick}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className={"menu" + (this.state.open ? " show" : "")}>
          <div className={"menu-branding" + (this.state.open ? " show" : "")}>
            <div className="portrait"></div>
          </div>
          <ul className={"menu-nav" + (this.state.open ? " show" : "")}>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                How To Reach Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
