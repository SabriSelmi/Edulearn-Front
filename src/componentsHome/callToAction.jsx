import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class CallToAction extends Component{
    render(){
        return(
            <div id="rs-calltoaction" className="rs-calltoaction sec-spacer bg4">
                <div className="container">
                    <div className="rs-cta-inner text-center">
                        <div className="sec-title mb-50 text-center">
                            <h2 className="white-color">WEB DESIGN &amp; DEVLOPMENT COURSE</h2>
                            <p className="white-color">Fusce sem dolor, interdum in efficitur at, faucibus nec
                                lorem.</p>
                        </div>
                        <NavLink className="cta-button" to="#">Join Now</NavLink>

                    </div>
                </div>
            </div>
        )
    }
}
export default CallToAction;