import React,{Component} from "react";

import {NavLink} from "react-router-dom";
import CarouselItem from "./coursesHomeCarouselItem";
import axios from "axios";

class CoursesHome extends Component{
    constructor(){
        super()
        this.state={
            tabCourses:[
                {
                image:"",
                subject:"",
                title:"",
                priceCourse:"",
                rating:{star1:""},
                reviews:"",
                description:"",
                courseTime: "",
                courseStudent:"",
                classDuration:""
                },
            ]
        }
    }
     componentDidMount(){
         axios.get("/home").then(res=>this.setState({
            tabCourses:res.data
        }))
    }
    render(){

        return(
            <div id="rs-courses" className="rs-courses sec-color sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-5 col-md-12">
                            <div className="sec-title mb-30">
                                <h2>POPULAR COURSES</h2>
                                <p>Fusce sem dolor inter in efficitur faucibus.</p>
                            </div>
                            <p className="mobile-mb-50">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized
                                .
                            </p>
                        </div>

                        <span className="col-lg-2"></span>

                        <div id="carouselExampleIndicators" className="carousel slide col-lg-4" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">


                                    <div className="cource-item mb-3">
                                        <div className="cource-img">
                                            <img src={this.state.tabCourses[0].image} alt=""/>
                                            <NavLink className="image-link" to="courses-details.html"
                                                     title="University Tour 2018">
                                                <i className="fa fa-link"></i>
                                            </NavLink>
                                            <span className="course-value">${this.state.tabCourses[0].priceCourse}</span>
                                        </div>
                                        <div className="course-body">
                                            <NavLink to="#" className="course-category">{this.state.tabCourses[0].subject}</NavLink>
                                            <h4 className="course-title"><NavLink to="courses-details.html">{this.state.tabCourses[0].title}</NavLink></h4>
                                            <div className="review-wrap">
                                                <ul className="rating">
                                                    <li className={`fa ${this.state.tabCourses[0].rating.star1}`}></li>
                                                    <li className={`fa ${this.state.tabCourses[0].rating.star2}`}></li>
                                                    <li className={`fa ${this.state.tabCourses[0].rating.star3}`}></li>
                                                    <li className={`fa ${this.state.tabCourses[0].rating.star4}`}></li>
                                                    <li className={`fa ${this.state.tabCourses[0].rating.star5}`}></li>
                                                </ul>
                                                <span className="review">{this.state.tabCourses[0].reviews} Reviews</span>
                                            </div>
                                            <div className="course-desc">
                                                <p>
                                                    {this.state.tabCourses[0].description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="course-footer">
                                            <div className="course-time">
                                                <span className="label">Course Time</span>
                                                <span className="desc">{this.state.tabCourses[0].courseTime}</span>
                                            </div>
                                            <div className="course-student">
                                                <span className="label">Course Student</span>
                                                <span className="desc">{this.state.tabCourses[0].courseStudent}</span>
                                            </div>
                                            <div className="class-duration">
                                                <span className="label">Class Duration</span>
                                                <span className="desc">{this.state.tabCourses[0].classDuration}</span>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                                {this.state.tabCourses.map((el,i)=><CarouselItem key={i} carouselItem={el}/>)}

                            </div>
                            <NavLink className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </NavLink>
                            <NavLink className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </NavLink>
                        </div>




                </div>
                </div>
            </div>
        )
    }
}
export default CoursesHome