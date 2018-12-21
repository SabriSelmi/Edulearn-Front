import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Logo from "./logo.png";
import Phone from "./phone-call.svg";
import Email from "./mail.svg";
import Location from "./placeholder.svg";



class HeaderTopStart extends Component{
    render(){
        return(
            <div className="rs-header-top">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-4 col-md-12">
                            <div className="logo-area">
                                <NavLink to="index.html"><img src={Logo} alt="logo"/></NavLink>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="header-contact">
                                        <div id="phone-details" className="widget-text"  >

                                            <div className="info-text"  >

                                                <NavLink to="tel:4155551234" className="row">
                                                    <img src={Phone} alt="phone" className="col-4" style={{marginLeft:"-30px",height:"30px"}} />
                                                    <div  className="col-8"><span>Call Us</span>
                                                    415 555 1234</div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="header-contact">
                                        <div id="info-details" className="widget-text">
                                            <i className="glyph-icon flaticon-email"></i>
                                            <div className="info-text">
                                                <NavLink to="mailto:info@domain.com" className="row">
                                                    <img src={Email} alt="mail" className="col-4" style={{marginLeft:"-30px",height:"30px"}} />
                                                    <div className="col-8">
                                                    <span>Mail Us</span>
                                                    info@domain.com
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="header-contact">
                                        <div id="address-details" className="widget-text">
                                            <i className="glyph-icon flaticon-placeholder"></i>
                                            <div className="info-text row">
                                                <img src={Location} alt="location" className="col-4" style={{marginLeft:"-30px",height:"30px"}} />
                                               <div className="col-8"><span>Location</span>
                                                New York, USA</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default HeaderTopStart;