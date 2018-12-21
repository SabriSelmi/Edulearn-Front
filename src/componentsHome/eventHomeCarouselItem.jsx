import React from "react";
import {NavLink} from "react-router-dom";

const CarouselItemEvent=({carouselItem})=>{
    return(
        <div className="carousel-item">

            <div className="event-item">
                <div className="event-img">
                    <img src={carouselItem.image} alt=""/>
                    <NavLink className="image-link" to="events-details.html" title="University Tour 2018">
                        <i className="fa fa-link"></i>
                    </NavLink>
                </div>
                <div className="events-details sec-color">
                    <div className="event-date">
                        <i className="fa fa-calendar"></i>
                        <span>{carouselItem.date}</span>
                    </div>
                    <h4 className="event-title"><NavLink to="events-details.html">{carouselItem.title}</NavLink>
                    </h4>
                    <div className="event-meta">
                        <div className="event-time">
                            <i className="fa fa-clock-o"></i>
                            <span>{carouselItem.time}</span>
                        </div>
                        <div className="event-location">
                            <i className="fa fa-map-marker"></i>
                            <span>{carouselItem.place}</span>
                        </div>
                    </div>
                    <div className="event-btn">
                        <NavLink to="#">Join Event <i className="fa fa-angle-double-right"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarouselItemEvent;