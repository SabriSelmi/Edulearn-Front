import React, { Component } from 'react';
import axios from 'axios';
import Proff from './prof';
import { render } from 'react-dom';



class Staff extends Component{
	constructor(props){
		super(props)
        this.state = {
            professors: [],
      
          };	

			}

			componentDidMount =()=>{
				axios.get("/professors").then(res=>
				  this.setState({
					professors:res.data
				  }))    
		   
		}
		
	
	
	
	
		
		deleteStudent = id => {
				axios.delete('/user/'+id).then((res) =>
				this.setState({
						...res.data
					}))
			   
					axios.get("/professors").then(res=>
						this.setState({
							professors:res.data
						}))    
					 
		  }
	
	
			
			renderStudent = student => {
				return <Proff key={student._id} student={student} onClick={this.deleteStudent} onchange={this.onchange} />;
			  }
			



    render(){
        return(
            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">          
    <div className="row mb-5 mt-5">
						<div className="col-md-12 col-sm-10 mb-5">
							<div className="card  card-box">
								<div className="card-head">
									<header>Staff List</header>
								</div>
								<div className="card-body ">
									<div className="table-wrap table-striped">
										<div className="table-responsive">
											<table className="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														<th>Name</th>
														<th>Designation</th>
														<th>Mobile</th>
														<th>Email</th>
														<th>Adress</th>
                                                        <th>Joining Date</th>
                                                        <th>Action</th>
													</tr>
												</thead>
												<tbody>
													
													{this.state.professors.map(this.renderStudent)}
													
													
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
export default Staff;