import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="nav-brand" href="#">
            ReactApp
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            type="button"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav ml-auto navbar-right">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
