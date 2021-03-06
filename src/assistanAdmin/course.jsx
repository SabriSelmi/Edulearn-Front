import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import axios from 'axios';
import CourseItem from './courseitem';
import { CSVLink, CSVDownload } from "react-csv";



class Course extends Component{
 componentDidMount=()=>{
       axios.get('/courses').then((res)=>this.props.refreshcoursereducer(res.data));
 }

 toggleedit = () => {
    this.setState({
      modaledit: !this.state.modaledit
    });
  }
 

    render(){
        let array=[]
        const {courses} =this.props
    console.log(courses)
    for (var key in courses) {    
        var obj = courses[key];
        for (var prop in obj) {
            array.push((prop + " = " + obj[prop] +"\n").replace(/\/","/g, '/'));
        }
        console.log(array)
    }
        return(
        <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">
<CSVLink data={[array]}>Download me</CSVLink>

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
													
                                                    {
                                                       courses.map((el,index)=>
                                                      <CourseItem key = {index} item={el} />
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

const mapStateToProps=(state)=>
{
    return {
        courses:state.courseReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        refreshcoursereducer:courses=>{
            dispatch({
                type:'REFRESH_COURSE',
                courses
            })
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Course);