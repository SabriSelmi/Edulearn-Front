import React, { Component } from 'react';



class Course extends Component{
    constructor(props){
        super(props)
        this.state={

          courses :[],
    
    
    }
    
      
    }
    render(){
        return(
        <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">

            <div className="row mb-5 mt-5">
						<div className="col-md-12 col-sm-10 mb-5">
							<div className="card  card-box">
								<div className="card-head">
									<header>Course List</header>
								</div>
								<div className="card-body ">
									<div className="table-wrap table-striped">
										<div className="table-responsive">
											<table className="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														<th>No</th>
														<th>Name</th>
														<th>Date</th>
														<th>Duration</th>
														<th>Details</th>
														<th>Seats</th>
                                                        <th>Value </th>
                                                        <th>Action</th>
													</tr>
												</thead>
												<tbody>
													
                                                    {this.state.courses.map((el,index)=>
                                                        <tr>
                                                    <td>{index}</td>
                                                    <td>{el.nom}</td>
                                                    <td>{el.date}</td>
                                                    <td>{el.duration}</td>
                                                    <td>{el.details}</td>
                                                    <td>{el.seats}</td>
                                                    <td>{el.value}</td>
                                                    <td><a href="javascript:void(0)" className="" data-toggle="tooltip" title="Edit"><i className="fa fa-check"></i></a>
															<a href="javascript:void(0)" className="text-inverse" title="Delete" data-toggle="tooltip"><i className="fa fa-trash"></i></a></td>
                                                    </tr>
                                                     )}
													
													
													
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
export default Course;