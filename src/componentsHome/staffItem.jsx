import React from "react";
import {NavLink} from "react-router-dom";


const StaffElement=({el})=>{
    return(
        <div className="col-lg-3 team-item mb-5">
            <div className="team-img">
                <img  src={el.image} alt="Seconde slide"/>
                <div className="normal-text">

                    <h3 className="team-name">{el.name}</h3>
                    <span className="subtitle">{el.subtitle}</span>
                </div>
            </div>

                <div className="team-content">
                    <div className="overly-border"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <h3 className="team-name"><NavLink to="teachers-single.html">{el.name}</NavLink></h3>
                            <span className="team-title">{el.subtitle}</span>
                            <p className="team-desc">{el.description}</p>
                            <div className="team-social">
                                <NavLink to={"#"} className="social-icon"><i
                                    className="fa fa-facebook"></i></NavLink>
                                <NavLink to="#" className="social-icon"><i
                                    className="fa fa-google-plus"></i></NavLink>
                                <NavLink to={"#"} className="social-icon"><i
                                    className="fa fa-twitter"></i></NavLink>
                                <NavLink to={"#"} className="social-icon"><i
                                    className="fa fa-pinterest-p"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

    )
}
export default StaffElement;