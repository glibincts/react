import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="mainHeader bg-primary text-white">
        <div className="container-fluid flex-column">
          <div className="row p-2">
            <div className="row col-sm-4">
              <div className="logo-content">
                <span>ReactApp</span>
              </div>
            </div>
            <div className="row col-sm-8">
              <div className="navBar-content">
                <ul className="list-inline" id="navId">
                  <li>Home</li>
                  <li>About</li>
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
