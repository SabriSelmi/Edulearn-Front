import React,{Component} from "react";
import {NavLink} from "react-router-dom";



class Toolbar extends Component{
    render(){
        return(
            <div className="rs-toolbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="rs-toolbar-left">
                                <div className="welcome-message">
                                    <i className="fa fa-bank"></i><span>Welcome to Edulearn</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rs-toolbar-right">
                                <div className="toolbar-share-icon">
                                    <ul>
                                        <li><NavLink to="#"><i className="fa fa-facebook"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-twitter"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-google-plus"></i></NavLink></li>
                                        <li><NavLink to="#"><i className="fa fa-linkedin"></i></NavLink></li>
                                    </ul>
                                </div>
                                <NavLink to="#" className="apply-btn">Apply Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Toolbar;