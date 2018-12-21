import React, { Component } from 'react';

import Eventitem from './eventItem';



class Eventlist extends Component {
  constructor(props){
    super(props)
    this.state={
      events:[
        {name:'Freshers Day reception',
      date:'28 June 2017',
      time:'12.30AM-05.30PM',
      location:'Venue A, Main Campus',
      history:'	There are many variations of passag of Lorem Ipsum available, but the majority have suffered.',
      like:57
  },
  {name:'Freshers Day reception',
  date:'28 June 2017',
  time:'12.30AM-05.30PM',
  location:'Venue A, Main Campus',
  history:'	There are many variations of passag of Lorem Ipsum available, but the majority have suffered.',
  like:23
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


  render() {
    
    return (
      <div>
          <div className="rs-events-2 sec-spacer">
            <div className="container">
             {this.state.events.map((el,i)=><Eventitem event ={el}  key={i}  image = {this.state.image}  onclick={this.onclick}
             />)}
</div>)

</div>

</div>
    );
  }
}

export default Eventlist;