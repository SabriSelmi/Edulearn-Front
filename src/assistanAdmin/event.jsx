import React, { Component } from 'react';
import Eventitem from './eventitem';
import axios from 'axios';


class Event extends Component{
    constructor(props){
        super(props)
        this.state={
          events:[]
}
    }

    componentDidMount =()=>{
        axios.get("/events").then(res=>
          this.setState({
            events:res.data
          }))    
}


    
deleteStudent = id => {
    axios.delete('/events/'+id).then((res) =>
    this.setState({
            ...res.data
        }))
        axios.get("/events").then(res=>
            this.setState({
              events:res.data
            }))    
         
}

        
renderStudent = student => {
    return <Eventitem key={student._id} student={student}   onClick={this.deleteStudent} onchange={this.onchange}  />;
  }
    render(){
        return(

            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">
            <div className="row mb-5 mt-5">
						<div className="col-md-12 col-sm-10 mb-5">
							<div className="card  card-box">
								<div className="card-head">
									<header>Event List</header>
								</div>
								<div className="card-body ">
									<div className="table-wrap table-striped">
										<div className="table-responsive">
											<table className="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														
														<th>Name</th>
														<th>Time</th>
														<th>Date </th>
														<th>Location</th>
														<th>History</th>
                                                        <th>Like</th>
														<th>Edit</th>
													</tr>
												</thead>
												<tbody>
                                                
                                                    {this.state.events.map((this.renderStudent) )}
													
													
												</tbody>
											</table>
										</div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  
                            </div>
          
        )
    }

}
export default Event;

