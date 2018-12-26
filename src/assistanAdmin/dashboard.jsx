import React from "react";

import AddProfessor from "./addProfessor";
import AddStudent from "./addStudent";
import EditStudent from "./editstudent";
import UserProfile from "./userProfile";
import EditProf from "./editproff";
import Editevent from "./editevent";
import {Route} from "react-router-dom";
import axios from "axios";

import EditCourse from './courseedit';
import AddEvent from './addEvent';
import Course from "./course";
import Event from "./event";
import Staff from "./staff";
import Students from "./students";
import Dashbord from "./dashbordAdmin";
import Sidebarmenu from "./sidebarmenu";
import PrimarySearchAppBar from "./topBar";
import TimelineResource from "../calendar/start";







class Navigation extends React.Component
{
    state = {
        roomData: [
            {
                Id: "",

                Subject: "",
                Description: "",
                StartTime: "",
                EndTime: "",
                RoomId: ""
            },
        ],

    }
    componentDidMount()
    {
        axios.get("/calendar").then(res => this.setState({
            roomData: res.data
        }))
    }
    render()
    {
        return (
            <div style={{marginTop: "2%"}}>
                {/*<MiniDrawer />*/}
                <PrimarySearchAppBar Click={this.props.Click} user={this.props.user} aspire1={(x) => this.props.aspire1(x)}/>
                <div className="row">
                    <Sidebarmenu/>
                    <Route exact path="/profile" component={Dashbord}/>
                    <Route path="/profile/students" component={Students}/>
                    <Route path="/profile/staff" component={Staff}/>
                    <Route path="/profile/event" component={Event}/>
                    <Route path="/profile/course" component={Course}/>
                    <Route path="/profile/userProfile" render={() => < UserProfile/>}/>
                    <Route path="/profile/addProfessor" render={() => < AddProfessor/>}/>
                    <Route  path="/profile/addEvent" render={() => < AddEvent/>}/>
                    <Route path="/profile/addStudent" component={AddStudent}/>
                    <Route path="/profile/calendar" render={() => <TimelineResource roomData={this.state.roomData}/>}/>
                    <Route exact  path="/profile/editStudent/:id" render ={(props)=> < EditStudent id={props.match.params.id}/>}/>
                    <Route exact  path="/profile/editProfessor/:id" render ={(props)=> < EditProf id={props.match.params.id}/>}/>
                    <Route exact  path="/profile/editEvent/:id" render ={(props)=> < Editevent id={props.match.params.id}/>}/>
                    <Route exact  path="/profile/editCourse/:id" render ={(props)=> < EditCourse id={props.match.params.id}/>}/>
                </div>

       
            </div>
        )
    }
}
export default Navigation