import React, { Component } from 'react';

import trach from './image/trach.png';
import edit from './image/edit.png';
import Popup from "reactjs-popup";
import Student from './student';
import { render } from 'react-dom';

const axios = require('axios');


	  



class Students extends Component{
	constructor(props){
		super(props)
        this.state = {
            students: [],
      
          };	

			}


		componentDidMount =()=>{
			axios.get("/students").then(res=>
			  this.setState({
				students:res.data
			  }))    
       
    }
    




    
    deleteStudent = id => {
            axios.delete('/user/'+id).then((res) =>
            this.setState({
                    ...res.data
                }))
           
                axios.get("/students").then(res=>
                    this.setState({
                      students:res.data
                    }))    
                 
      }


        
        renderStudent = student => {
            return <Student key={student._id} student={student} onClick={this.deleteStudent} onchange={this.onchange} />;
          }
        
    render(){
			
        console.log(this.state.students)
        return(
        <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">

            <div className="row mb-5 mt-5">
						<div className="col-md-12 col-sm-10 mb-5">
							<div className="card  card-box">
								<div className="card-head">
									<header>Students List</header>
								</div>
								<div className="card-body ">
									<div className="table-wrap table-striped">
										<div className="table-responsive">
											<table className="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
													
														<th>Name</th>
														<th>departement</th>
														<th>Mobile</th>
														<th>Email</th>
														<th>Admission Date</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
                                                {this.state.students.map(this.renderStudent)}
												
													
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
export default Students;

