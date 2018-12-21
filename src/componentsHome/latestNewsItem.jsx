import React,{Component} from "react";
import {NavLink} from "react-router-dom";


class LatestNewsItem extends Component{
    render(){
        return(
            <div className="news-normal-block">
                <div className="news-img">
                    <NavLink to="#">
                        <img src={this.props.el.image} alt=""/>
                    </NavLink>
                </div>
                <div className="news-date text-white">
                    <i className="fa fa-calendar-check-o"></i>
                    <span>{this.props.el.date}</span>
                </div>
                <h4 className="news-title"><NavLink to="blog-details.html">{this.props.el.title}</NavLink></h4>
                <div className="news-desc">
                    <p>
                        {this.props.el.para}
                    </p>
                </div>
                <div className="news-btn">
                    <NavLink to="#">Read More</NavLink>
                </div>
            </div>
        )
    }
}
export default LatestNewsItem;