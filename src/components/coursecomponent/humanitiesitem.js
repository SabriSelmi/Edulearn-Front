import React, { Component } from 'react';
import Course1 from "../../images/courses/1.jpg"

 const Humanities = (props)=>{
console.log(props)
    return (
					<div class="col-lg-4 col-md-6 grid-item filter1" >
		                <div class="course-item">
		                    <div class="course-img">
		                        <img src={Course1} alt="" />
		                        <span class="course-value">${props.course.priceCourse}</span>
		                        <div class="course-toolbar">
		                    		<h4 class="course-category"><a href="#">{props.course.title}</a></h4>
		                        	<div class="course-date">
		                        		<i class="fa fa-calendar"></i> {props.course.courseTime}
		                        	</div>
		                        	<div class="course-duration">
		                        		<i class="fa fa-clock-o"></i>{props.course.classDuration}
		                        	</div>
		                        </div>
		                    </div>
		                    <div class="course-body">
		                    	<div class="course-desc">
		                    		<h4 class="course-title"><a href="">{props.course.title}</a></h4>
		                    		<p>
		                    			Cras ultricies lacus consectetur, consectetur scelerisque arcu.Curabitur Aenean egestas a
		                    			Nullam augue augue.
		                    		</p>
		                    	</div>
		                    </div>
		                    <div class="course-footer">
		                    	<div class="course-seats">
		                    		<i class="fa fa-users"></i>  {props.course.courseStudent}
		                    	</div>
		                    	<div class="course-button">
		                    		<a href="#">APPLY NOW</a>
		                    	</div>
		                    </div>
		                </div>						
					</div>
					
    );

}

export default Humanities;
