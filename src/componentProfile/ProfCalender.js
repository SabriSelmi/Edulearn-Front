import React,{Component} from "react";
import TimelineResource from "./calendar/start";

class Professorcalender extends React.Component {

    render() {
        console.log(this.props)
      return (
        <div>
  <TimelineResource roomData={this.props.roomData}/>
        </div>
      );
    }
  }
  
  export default Professorcalender 