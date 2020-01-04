import React, { Component } from "react";
import Menu from "./menu/Menu";
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
        <Menu open={this.state.open} />
      </header>
    );
  }
}

export default Header;
