import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Eventitem from './eventItem';
const axios = require('axios');


class Eventlist extends Component {
  constructor(props){
    super(props)
    this.state={
      events:[],
      images:[]

     

}
}
componentDidMount =()=>{
  axios.get("/events").then(res=>
    this.setState({
      events:res.data
    }))    
}





  render() {
console.log("event list",this.state)
    return (
      <div>
          <div className="rs-events-2 sec-spacer">
            <div className="container">
             {this.state.events.map((el,i)=><Eventitem event ={el}  key={i}  
             />)}
             
</div>)

</div>

</div>
    );
  }
}

export default Eventlist;