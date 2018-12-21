import React,{Component} from "react";
import CarouselItemEvent from "./eventHomeCarouselItem";
import {NavLink} from "react-router-dom";
import axios from "axios";


class EventHome extends Component{
    constructor(){
        super()
        this.state={
            tabEvent:[
                {
                    date:"",
                    title:"",
                    time:"",
                    place:"",
                    image:""
                }
            ]
        }
    }
    componentDidMount(){
        axios.get("/events").then(res=>this.setState({
            tabEvent:res.data
        }))
    }
    render(){
        return(
            <div id="rs-events" className="rs-events sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-4 col-md-12">
                            <div className="sec-title mb-30">
                                <h2>UPCOMING EVENTS</h2>
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

                                <div className="event-item">
                            <div className="event-img">
                                <img src="images/events/1.jpg" alt=""/>
                                <NavLink className="image-link" to="events-details.html" title="University Tour 2018">
                                    <i className="fa fa-link"></i>
                                </NavLink>
                            </div>
                            <div className="events-details sec-color">
                                <div className="event-date">
                                    <i className="fa fa-calendar"></i>
                                    <span>28 June 2017</span>
                                </div>
                                <h4 className="event-title"><NavLink to="events-details.html">PRACTICE WORKSHOP 2018</NavLink>
                                </h4>
                                <div className="event-meta">
                                    <div className="event-time">
                                        <i className="fa fa-clock-o"></i>
                                        <span>12.30AM-05.30PM</span>
                                    </div>
                                    <div className="event-location">
                                        <i className="fa fa-map-marker"></i>
                                        <span>Venue A, Main Campus</span>
                                    </div>
                                </div>
                                <div className="event-btn">
                                    <NavLink to="#">Join Event <i className="fa fa-angle-double-right"></i></NavLink>
                                </div>
                            </div>
                        </div>
                                </div>

                                {this.state.tabEvent.map((el,i)=><CarouselItemEvent key={i} carouselItem={el}/>)}

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
export default EventHome;