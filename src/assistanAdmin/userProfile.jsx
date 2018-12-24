import React,{Component} from "react";
import Avatar from "../images/gallery/kids/1.jpg"
import {NavLink} from "react-router-dom";

class UserProfile extends Component{
    render(){
        return(
<div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">
                <div className="card card-topline-aqua" >
                    <div className="card-body no-padding height-9">
                        <div className="row">
                            <div className="profile-userpic">
                                <img src={Avatar} className="img-responsive" alt=""/></div>
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">Kiran Patel</div>
                            <div className="profile-usertitle-job"> Professor</div>
                        </div>
                        <ul className="list-group list-group-unbordered">
                            <li className="list-group-item">
                                <b>Followers</b> <NavLink to="#" className="pull-right">1,200</NavLink>
                            </li>
                            <li className="list-group-item">
                                <b>Following</b> <NavLink to="#" className="pull-right">750</NavLink>
                            </li>
                            <li className="list-group-item">
                                <b>Friends</b> <NavLink to="#" className="pull-right">11,172</NavLink>
                            </li>
                        </ul>

                        <div className="profile-userbuttons">
                            <button type="button" className="btn btn-circle green btn-sm">Follow</button>
                            <button type="button" className="btn btn-circle red btn-sm">Message</button>
                        </div>

                    </div>
                </div>
</div>

                                   )
    }
}
export default UserProfile;