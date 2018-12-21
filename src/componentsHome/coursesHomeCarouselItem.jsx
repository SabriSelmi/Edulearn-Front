import React from "react";
import {NavLink} from "react-router-dom";

const CarouselItem = ({carouselItem}) => {
return(
    <div className="carousel-item">


        <div className="cource-item mb-3">
            <div className="cource-img">
                <img src={carouselItem.image} alt=""/>
                <NavLink className="image-link" to="courses-details.html"
                         title="University Tour 2018">
                    <i className="fa fa-link"></i>
                </NavLink>
                <span className="course-value">${carouselItem.priceCourse}</span>
            </div>
            <div className="course-body">
                <NavLink to="#" className="course-category">{carouselItem.subject}</NavLink>
                <h4 className="course-title"><NavLink to="courses-details.html">{carouselItem.title}</NavLink></h4>
                <div className="review-wrap">
                    <ul className="rating">
                        <li className={`fa ${carouselItem.rating.star1}`}></li>
                        <li className={`fa ${carouselItem.rating.star2}`}></li>
                        <li className={`fa ${carouselItem.rating.star3}`}></li>
                        <li className={`fa ${carouselItem.rating.star4}`}></li>
                        <li className={`fa ${carouselItem.rating.star5}`}></li>
                    </ul>
                    <span className="review">{carouselItem.reviews} Reviews</span>
                </div>
                <div className="course-desc">
                    <p>
                        {carouselItem.description}
                    </p>
                </div>
            </div>
            <div className="course-footer">
                <div className="course-time">
                    <span className="label">Course Time</span>
                    <span className="desc">{carouselItem.courseTime}</span>
                </div>
                <div className="course-student">
                    <span className="label">Course Student</span>
                    <span className="desc">{carouselItem.courseStudent}</span>
                </div>
                <div className="class-duration">
                    <span className="label">Class Duration</span>
                    <span className="desc">{carouselItem.classDuration}</span>
                </div>
            </div>
        </div>




    </div>)

}
export default CarouselItem;