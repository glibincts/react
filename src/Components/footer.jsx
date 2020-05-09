import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer container" id='footer'>
         <div className="row" id='footer1'>
            <div className="col-sm-4">
              <div className="nav-header"><span>#Links</span></div>
                <div className="nav-content">
                  <ul className="nav navbar-nav">
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
              </div>
            <div className="col-sm-4">
              <div className="nav-header"><span>#Social</span></div>
                <div className="nav-content">
                  <ul className="nav navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        <a href="#" class="fa fa-facebook"></a>
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        <a href="#" class="fa fa-twitter"></a>
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        <a href="#" class="fa fa-github"></a>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            <div className="col-sm-4">
              <div className="nav-header"><span>#Reach us</span></div>
            </div>
         </div>
         <div className="row" id='footer2'>
            <span className='m-auto' id='copyR'>© Copyright 2K20</span> 
          </div> 
      </div>
    );
  }
}

export default Footer;
