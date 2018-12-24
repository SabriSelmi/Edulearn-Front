import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class Course extends Component{
    constructor(props){
        super(props)
        this.state={
          nom:'',
          date:'',
          duration:'',
          details:'',
          seats:'',
          value:'',
          courses :
           [{ nom:'Science',
          date:'28-06-2017',
          duration:' 4 year',
          details:'',
          seats:'70 SEATS',
          value:'$450'},
          { nom:'Math',
          date:'28-06-2019',
          duration:' 3 year',
          details:'',
          seats:'80 SEATS',
          value:'$230'},
          { nom:'Math',
          date:'28-06-2019',
          duration:' 3 year',
          details:'',
          seats:'80 SEATS',
          value:'$230'},
          { nom:'Math',
          date:'28-06-2019',
          duration:' 3 year',
          details:'',
          seats:'80 SEATS',
          value:'$230'}],
          currentPage: 1,
          todosPerPage: 2,
          disabled:true,
      coursesscience :
      [{ nom:'Science',
     date:'28-06-2017',
     duration:' 4 year',
     details:'',
     seats:'70 SEATS',
     value:'$450'}],
    
    
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
                                                    <td><NavLink to="#" className="" data-toggle="tooltip" title="Edit"><i className="fa fa-check"></i></NavLink>
															<NavLink to="#"  className="text-inverse" title="Delete" data-toggle="tooltip"><i className="fa fa-trash"></i></NavLink></td>
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