import React from 'react';
import {NavLink} from "react-router-dom";

 const Business = (props)=>{
    return (

					<div className="col-lg-4 col-md-6 grid-item filter1 " style={{marginTop:"20px"}}>
		                <div className="course-item">
		                    <div className="course-img">
		                        <img src="images/courses/10.jpg" alt="" />
		                        <span className="course-value"></span>
		                        <div className="course-toolbar">
		                    		<h4 className="course-category"><NavLink to="#"></NavLink></h4>
		                        	<div className="course-date">
		                        		<i className="fa fa-calendar"></i>
		                        	</div>
		                        	<div className="course-duration">
		                        		<i className="fa fa-clock-o"></i>
		                        	</div>
		                        </div>
		                    </div>
		                    <div className="course-body">
		                    	<div className="course-desc">
		                    		<h4 className="course-title"><NavLink to="/course">Computer Engineering</NavLink></h4>
		                    		<p>
		                    			Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a
		                    			Nullam augue augue.
		                    		</p>
		                    	</div>
		                    </div>
		                    <div className="course-footer">
		                    	<div className="course-seats">
		                    		<i className="fa fa-users"></i> 70 SEATS
		                    	</div>
		                    	<div className="course-button">
		                    		<NavLink to="#">APPLY NOW</NavLink>
		                    	</div>
		                    </div>
		                </div>						
					</div>
    );

}

export default Business;
