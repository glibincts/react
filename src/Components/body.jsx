import React, { Component } from "react";
import reactImage from '../Images/back.jpg';

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" id='container1'>
        <div className="row" id='row1'>
          <div className="col-sm-6 text-center ml-auto" >
            <div className="banner my-auto align-self-center">  
              <h4>Welcome to MyApp</h4> 
              <p>Hey guys, thanks for watching my new React WebApplication. This is my first project in react webapp</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
