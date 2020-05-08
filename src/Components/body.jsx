import React, { Component } from "react";
import reactImage from '../Imges/react.jpg';

class Body extends Component {
  state = {};
  render() {
    return (
      <div className="container" id='container1'>
        <div className="row text-center" id='row1'>
          <div className="col-sm-6 text-center" >
            <h4>Welcome to MyApp</h4> 
            <p>Hey guys, thanks for watching my new React WebApplication. This is my first project in react webapp</p>
          </div>
          <div className="col-sm-6 text-center">
              <img src={reactImage} alt="Responsive image" className='img-thumbnail' width='50%'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
