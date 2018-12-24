import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

 const CourseItem = (props)=>{
console.log(props)
    return (
					<div className="col-lg-4 col-md-6 grid-item filter1" >
		                <div className="course-item">
		                    <div className="course-img">
		                        <img src="images/courses/1.jpg" alt="" />
		                        <span className="course-value">{props.course.value}</span>
		                        <div className="course-toolbar">
		                    		<h4 className="course-category"><NavLink to="#">{props.course.nom}</NavLink></h4>
		                        	<div className="course-date">
		                        		<i className="fa fa-calendar"></i> {props.course.date}
		                        	</div>
		                        	<div className="course-duration">
		                        		<i className="fa fa-clock-o"></i>{props.course.duration}
		                        	</div>
		                        </div>
		                    </div>
		                    <div className="course-body">
		                    	<div className="course-desc">
		                    		<h4 className="course-title"><a href="courses-details.html">Computer Engineering</a></h4>
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

export default CourseItem;
