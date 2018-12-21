import React, { Component } from 'react';



class Dashboard extends Component{
    render(){
        return(

            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">



                <div className="state-overview">
                <div className="row container">
                <div class="col-xl-4 col-md-6 col-12">
								<div class="info-box bg-b-green">
                                <span class="info-box-icon push-bottom"><i class="fa fa-users"></i></span>
									<div class="info-box-content">
										<span class="info-box-text">Total Students</span>
										<span class="info-box-number">450</span>
										<div class="progress">
                                     
											<div class="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span class="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>


                            <div class="col-xl-4 col-md-6 col-12">
								<div class="info-box bg-b-yellow">
                                <span class="info-box-icon push-bottom"><i class="fa fa-users"></i></span>
									<div class="info-box-content">
										<span class="info-box-text">Total Students</span>
										<span class="info-box-number">450</span>
										<div class="progress">
                                     
											<div class="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span class="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
                            <div class="col-xl-4 col-md-6 col-12">
								<div class="info-box bg-b-blue">
                                <span class="info-box-icon push-bottom"><i class="fa fa-graduation-cap"></i></span>
									<div class="info-box-content">
										<span class="info-box-text">Total Students</span>
										<span class="info-box-number">450</span>
										<div class="progress">
                                     
											<div class="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span class="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
                            <div class="col-xl-4 col-md-6 col-12">
								<div class="info-box bg-b-pink">
                                <span class="info-box-icon push-bottom"><i class="fa fa-dollar"></i></span>
									<div class="info-box-content">
										<span class="info-box-text">Total Students</span>
										<span class="info-box-number">450</span>
										<div class="progress">
                                     
											<div class="progress-bar" style={{width: "45%"}}></div>
										</div>
										<span class="progress-description">
											45% Increase in 28 Days
										</span>
									</div>
								</div>
							</div>
                            </div>
                            </div>


                            <div class="row mt-5">
						<div class="col-lg-4 col-md-6 col-12 col-sm-6 mb-5">
							<div class="blogThumb mb-5">
								<div class="thumb-center"><img class="img-responsive" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXq06eXZsa5TZ_EqIn6OXg6wxbth7HQTppuJiZQOBKp_xWqk8b"/></div>
								<div class="course-box">
									<h4>PHP Development Course</h4>
									<div class="text-muted"><span class="m-r-10">April 23</span>
										<a class="course-likes m-l-10" href="#"><i class="fa fa-heart-o"></i> 654</a>
									</div>
									<p><span><i class="ti-alarm-clock"></i> Duration: 6 Months</span></p>
									<p><span><i class="ti-user"></i> Professor: Jane Doe</span></p>
									<p><span><i class="fa fa-graduation-cap"></i> Students: 200+</span></p>
									<button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info" data-upgraded=",MaterialButton,MaterialRipple">Read
										More<span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
								</div>
							</div>
						</div>
             
                            </div>
                            <div class="row mb-5">
						<div class="col-md-12 col-sm-10 mb-5">
							<div class="card  card-box">
								<div class="card-head">
									<header>New Student List</header>
									<div class="tools">
										<a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
										<a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
										<a class="t-close btn-color fa fa-times" href="javascript:;"></a>
									</div>
								</div>
								<div class="card-body ">
									<div class="table-wrap">
										<div class="table-responsive">
											<table class="table display product-overview mb-30" id="support_table">
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
															<span class="label label-sm label-success">paid</span>
														</td>
														<td>Mechanical</td>
														<td><a href="javascript:void(0)" class="" data-toggle="tooltip" title="Edit"><i class="fa fa-check"></i></a>
															<a href="javascript:void(0)" class="text-inverse" title="Delete" data-toggle="tooltip"><i class="fa fa-trash"></i></a></td>
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