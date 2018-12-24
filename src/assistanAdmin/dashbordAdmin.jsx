import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class Dashboard extends Component{
    render(){
        return(

            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">



                <div className="state-overview">
                <div className="row container">
                <div className="col-xl-4 col-md-6 col-12">
								<div className="info-box bg-b-green">
                                <span className="info-box-icon push-bottom"><i className="fa fa-users"></i></span>
									<div className="info-box-content">
										<span className="info-box-text">Total Students</span>
										<span className="info-box-number">450</span>
										<div className="progress">
                                     
											<div className="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span className="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>


                            <div className="col-xl-4 col-md-6 col-12">
								<div className="info-box bg-b-yellow">
                                <span className="info-box-icon push-bottom"><i className="fa fa-users"></i></span>
									<div className="info-box-content">
										<span className="info-box-text">Total Students</span>
										<span className="info-box-number">450</span>
										<div className="progress">
                                     
											<div className="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span className="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
                            <div className="col-xl-4 col-md-6 col-12">
								<div className="info-box bg-b-blue">
                                <span className="info-box-icon push-bottom"><i className="fa fa-graduation-cap"></i></span>
									<div className="info-box-content">
										<span className="info-box-text">Total Students</span>
										<span className="info-box-number">450</span>
										<div className="progress">
                                     
											<div className="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span className="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
                            <div className="col-xl-4 col-md-6 col-12">
								<div className="info-box bg-b-pink">
                                <span className="info-box-icon push-bottom"><i className="fa fa-dollar"></i></span>
									<div className="info-box-content">
										<span className="info-box-text">Total Students</span>
										<span className="info-box-number">450</span>
										<div className="progress">
                                     
											<div className="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span className="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
                            </div>
                            </div>


                            <div className="row mt-5">
						<div className="col-lg-4 col-md-6 col-12 col-sm-6 mb-5">
							<div className="blogThumb mb-5">
								<div className="thumb-center"><img className="img-responsive" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXq06eXZsa5TZ_EqIn6OXg6wxbth7HQTppuJiZQOBKp_xWqk8b"/></div>
								<div className="course-box">
									<h4>PHP Development Course</h4>
									<div className="text-muted"><span className="m-r-10">April 23</span>
										<NavLink className="course-likes m-l-10" to="#"><i className="fa fa-heart-o"></i> 654</NavLink>
									</div>
									<p><span><i className="ti-alarm-clock"></i> Duration: 6 Months</span></p>
									<p><span><i className="ti-user"></i> Professor: Jane Doe</span></p>
									<p><span><i className="fa fa-graduation-cap"></i> Students: 200+</span></p>
									<button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info" data-upgraded=",MaterialButton,MaterialRipple">Read
										More<span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
								</div>
							</div>
						</div>
             
                            </div>
                            <div className="row mb-5">
						<div className="col-md-12 col-sm-10 mb-5">
							<div className="card  card-box">
								<div className="card-head">
									<header>New Student List</header>
									<div className="tools">
										<NavLink className="fa fa-repeat btn-color box-refresh" to="#"></NavLink>
										<NavLink className="t-collapse btn-color fa fa-chevron-down" to="#"></NavLink>
										<NavLink className="t-close btn-color fa fa-times" to="#"></NavLink>
									</div>
								</div>
								<div className="card-body ">
									<div className="table-wrap">
										<div className="table-responsive">
											<table className="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														<th>No</th>
														<th>Name</th>
														<th>Assigned Professor</th>
														<th>Date Of Admit</th>
														<th>Fees</th>
														<th>Branch</th>
														<th>Edit</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Jens Brincker</td>
														<td>Kenny Josh</td>
														<td>27/05/2016</td>
														<td>
															<span className="label label-sm label-success">paid</span>
														</td>
														<td>Mechanical</td>
														<td><NavLink  to="#" className="" data-toggle="tooltip" title="Edit"><i className="fa fa-check"></i></NavLink>
															<NavLink to="#" className="text-inverse" title="Delete" data-toggle="tooltip"><i className="fa fa-trash"></i></NavLink></td>
													</tr>
													
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
export default Dashboard;