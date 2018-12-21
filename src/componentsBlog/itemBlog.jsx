import React from "react";
import {NavLink} from "react-router-dom";

const ItemBlog=({element})=> {
    return (
        <div className="row mb-50 blog-inner">
            <div className="col-lg-6 col-md-12">
                <div className="blog-images">
                    <NavLink to="blog-details.html"><i className="fa fa-link" aria-hidden="true"></i> <img
                        src={element.imgBlog} alt="blog"/></NavLink>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="blog-content">
                    <div className="date">
                        <i className="fa fa-calendar-check-o"></i> {element.dateBlog}
                    </div>
                    <h4><a href="blog-details.html">{element.titleBlog}</a></h4>

                    <p>{element.paragrapheBlog}</p>
                    <a className="primary-btn" href="blog-details.html">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default  ItemBlog;


