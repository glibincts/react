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
              <h2 className='text-primary'>Welcome to MyApp</h2> 
              <h4 className='mt-2'>Hey guys, thanks for watching my new React WebApplication. This is my first project in react webapp</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
