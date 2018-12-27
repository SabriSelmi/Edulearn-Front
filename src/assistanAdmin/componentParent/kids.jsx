import React,{Component} from 'react';
import {NavLink} from "react-router-dom";
class Kids extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="col-lg-3 team-item mb-5">
        <div className="team-img">
            <img  src="https://www.arfad.ch/wp-content/uploads/2015/12/profile_default.png" style={{height:"250px",width:"250px"}} alt="Seconde slide"/>
            <div className="normal-text">

                <h3 className="team-name">{this.props.el.name}</h3>
                <span className="subtitle">{this.props.el.lastName}</span>
            </div>
        </div>

            <div className="team-content">
                <div className="overly-border"></div>
                <div className="display-table">
                    <div className="display-table-cell">
                        <h3 className="team-name"><NavLink to="teachers-single.html">{this.props.el.email}</NavLink></h3>
                        <span className="team-title">{this.props.el.class}</span>
                        <p className="team-desc">{this.props.el.mobile}</p>
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

        </div> );
    }
}
 
export default Kids;