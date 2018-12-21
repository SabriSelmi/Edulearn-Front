import React, { Component } from 'react';
import StartAbout from "../componentsAbout/startAbout";
import History from "../componentsAbout/history";
import Mission from "../componentsAbout/mission";
import Vision from "../componentsAbout/vision";






class About extends Component {
  render() {
    return (
      <div className="App">
          <StartAbout/>
          <History/>
          <Mission/>
          <Vision/>
      </div>
    );
  }
}

export default About;
