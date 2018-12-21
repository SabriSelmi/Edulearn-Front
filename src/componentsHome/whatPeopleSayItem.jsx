import React,{Component} from "react";

class WhatPeopleSayItem extends Component{
    render(){
        return(
            <div className="testimonial-item col-lg-3 m-4 col-md-12">
                <div className="testi-img">
                    <img src={this.props.el.image} alt="Person"/>
                </div>
                <div className="testi-desc">
                    <h4 className="testi-name">{this.props.el.name}</h4>
                    <p>
                        {this.props.el.para}
                    </p>
                </div>
            </div>
        )
    }
}
export default WhatPeopleSayItem;