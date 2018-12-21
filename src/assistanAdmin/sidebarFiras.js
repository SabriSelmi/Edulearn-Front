import React, { Component } from 'react';
import {  Link} from "react-router-dom";

import './sidebar.css';
import './styleFiras.css';
import Button from "@material-ui/core/Button/Button";



class SidebarAdmin extends Component {
    render() {
        return (

      <div style={{position:"absolute",left:"0",top:"0",zIndex:"5000"}}  className=" col-lg-4 col-md-4 col-sm-4">
          <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#wrapper">  <a id="nav-expander" className="nav-expander fixed"><i className="fa fa-bars fa-lg white"></i></a></button>
          <div id="wrapper"className="wrapper">
        <nav id="sidebar">
            <div  id ="sidebar-header"className="sidebar-header">
            <img src="images/logo.png"/>
            </div>
            <ul className="list-unstyled components">
                <li>
               
                   
                      <Link to="/profile/admin"> <i className="fa fa-home"></i>Dashboard</Link>
             
                </li>
                <li>
        
                   <Link to="/profile/admin/staff"><i className="fa fa-cog"></i>Staff</Link>
                   </li>
     
                <li>
                 
               
                    <Link to="/profile/admin/parents"><i className="fa fa-users"></i>Parent</Link>
                </li>
                <li>
                 
                    <Link to="/profile/admin/students">
                    <i className="fa fa-users"></i>Students</Link>
           
                </li>
                <li>
                   
                     <Link to="/profile/admin/courses"> <i className="fa fa-book"></i>   Courses</Link>
                     
                 
                </li>
                <li>
                 
                 <Link to="/profile/admin/events"> <i className="fa fa-calendar"> </i> Event</Link>
                     
            
                </li>
    
            </ul>
        </nav>

        </div> 
        </div>
  

   );
 }
}

 export default SidebarAdmin;
