import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="mainHeader bg-primary text-white">
        <div className="container-fluid flex-column header-container">
          <div className="row p-2">
            <div className="row col-sm-4">
              <div className="logo-content align-middle">
                <span className="align-middle logo-text font-weight-bolder">
                  ReactApp
                </span>
              </div>
            </div>
            <div className="row col-sm-8">
              <div className="navBar-content float-right">
                <ul className="nav">
                  <li className="nav-link active">Home</li>
                  <li className="nav-link active">About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
