import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class Sidebarmenu extends Component{
    render(){
        return(
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 mt-2  pt-5" style={{backgroundColor: "#3f51b5",width:"20%",maxHeight:"600px"}}>
                    <h3><NavLink to="/profile/messages" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Messages</NavLink></h3>
                <h3><NavLink to="/profile" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Students</NavLink></h3>
                <h3><NavLink to="/profile/staff" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Professors</NavLink></h3>
                <h3><NavLink to="/profile/event" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Events</NavLink></h3>
                <h3><NavLink to="/profile/course" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Courses</NavLink></h3>

                <h3><NavLink to="/profile/addProfessor" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Add Professor</NavLink></h3>
                <h3><NavLink to="/profile/addStudent" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Add Student</NavLink></h3>
                <h3><NavLink to="/profile/addEvent" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Add Event</NavLink></h3>
                <h3><NavLink to="/profile/calendar" style={{color:"white",fontSize:"1.7vw",paddingLeft:"15%"}}>Calendar</NavLink></h3>

            </div>
        )
    }
}
export default Sidebarmenu;