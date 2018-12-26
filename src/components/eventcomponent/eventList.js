import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Eventitem from './eventItem';
import axios from "axios";



class Eventlist extends Component {
  constructor(props){
    super(props)
    this.state={
      tabEvent:[
        {title:'',
      date:'',
            time:'',
            place:'',
           
            image:[{
              src: '',
             
            },
            {
              src: '',
            
            },
            {
              src: '',
            
                 
            
            }
            ],
      history:'',
      like:"",
      userlike:[{nom:""},{nom:"firas"}]
  }
],
image:[{
  src: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
 
},
{
  src: 'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

},
{
  src: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',

     

}
]
    }
  }



  componentDidMount(){
    axios.get("/events").then(res=>this.setState({
        tabEvent:res.data
    }))
}
  render() {
console.log("event list",this.state.tabEvent)
    return (
      <div>
          <div className="rs-events-2 sec-spacer">
            <div className="container">
             {this.state.tabEvent.map((el,i)=><Eventitem event ={el}  key={i}  image = {this.state.image}  onclick={this.onclick}
             />)}
             
</div>)

</div>

</div>
    );
  }
}

export default Eventlist;