import React, { Component } from 'react';


class Students extends Component{
    render(){
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
														<th>No</th>
														<th>Name</th>
														<th>department</th>
														<th>Mobile</th>
														<th>Email</th>
														<th>Admission Date</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>Jens Brincker</td>
														<td>Science</td>
														<td>123456</td>
														<td>
															firas@yahoo.fr
														</td>
														<td>11/11/1992</td>
														<td><a href="javascript:void(0)" className="" data-toggle="tooltip" title="Edit"><i className="fa fa-check"></i></a>
															<a href="javascript:void(0)" className="text-inverse" title="Delete" data-toggle="tooltip"><i className="fa fa-trash"></i></a></td>
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
export default Students;