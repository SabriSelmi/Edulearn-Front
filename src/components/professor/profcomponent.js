import React, { Component } from 'react';


import './prof.css';

class Prof extends Component {
    render() {
        return (
      <div>
          <div className="containera container" style={{ marginTop:"100px", height:'1500px' }}>
                <div className="row  d-flex m-5 ">
                <div className="container">
    <div className="fb-profile mt-5">
        <img align="left" className="fb-image-lg" src="http://lorempixel.com/850/280/nightlife/5/" alt="Profile image example"/>
        <img align="left" className="fb-image-profile thumbnail" src="http://lorempixel.com/180/180/people/9/" alt="Profile image example"/>
        <div className="fb-profile-text">
            <h1>Prof </h1>
            <p>this is Proff profile</p>
        </div>
    </div>

      <div className="d-flex justify-content-center ">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" className="search_icon"><i className="fa fa-search"></i></a>
        </div>
      </div>
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
                 </div>
                </div>
                
</div>
   );
 }
}

 export default Prof;
