import React, { Component } from 'react';
import Messageitem from './messageitem';
import axios from 'axios';


class Message extends Component{
    constructor(props){
        super(props)
        this.state={
            contactus:[]
}
    }

    componentDidMount =()=>{
        axios.get("/contactus").then(res=>
          this.setState({
            contactus:res.data
          }))    
}


    
deleteStudent = id => {
    axios.delete('/contactus/'+id).then((res) =>
    this.setState({
            ...res.data
        }))
        axios.get ('/contactus').then((res)=>
        this.setState({
            contactus:res.data
        }))
}


        
renderStudent = student => {
    return <Messageitem key={student._id} student={student}   onClick={this.deleteStudent}  />;
  }
    render(){
        return(

            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">
            <div className="row mb-5 mt-5">
						<div className="col-md-12 col-sm-10 mb-5">
							<div className="card  card-box">
								<div className="card-head">
									<header>Messages</header>
								</div>
								<div className="card-body ">
									<div className="table-wrap table-striped">
										<div className="table-responsive">
											<table className="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														
														<th>FirstName</th>
                                                        <th>LastName</th>
                                                        <th>Email</th>
                                                        <th>Subject</th>
														<th>Message</th>
													</tr>
												</thead>
												<tbody>
                                                
                                                    {this.state.contactus.map((this.renderStudent) )}
													
													
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
export default Message;

