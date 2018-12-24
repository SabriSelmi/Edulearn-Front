import React from "react";

import AddProfessor from "./addProfessor";
import AddStudent from "./addStudent";
import EditStudent from "./editstudent";
import UserProfile from "./userProfile";
import EditProf from "./editproff";
import Editevent from "./editevent";
import {Route} from "react-router-dom";

import MiniDrawer from "./sidebar";
import Course from "./course";
import Event from "./event";
import Staff from "./staff";
import Students from "./students";
import Dashbord from "./dashbordAdmin";
import Sidebarmenu from "./sidebarmenu";
import PrimarySearchAppBar from "./topBar";






const Navigation = (props) => (
    <div style={{marginTop:"2%"}}>
        {/*<MiniDrawer />*/}
<PrimarySearchAppBar Click={props.Click} user={props.user} aspire1={(x)=>props.aspire1(x)}/>
<div className="row">
    <Sidebarmenu/>
        <Route exact path="/profile" component={Dashbord}/>
        <Route path="/profile/students" component={Students}/>
        <Route path="/profile/staff" component ={Staff}/>
        <Route path="/profile/event" component ={Event}/>
        <Route path="/profile/course" component ={Course}/>
        <Route path="/profile/userProfile" render ={()=> < UserProfile/>}/>
        <Route path="/profile/addProfessor" render ={()=>< AddProfessor/>}/>
        <Route path="/profile/addStudent" component ={AddStudent}/>
        <Route exact  path="/profile/editStudent/:id" render ={(props)=> < EditStudent id={props.match.params.id}/>}/>
        <Route exact  path="/profile/editProfessor/:id" render ={(props)=> < EditProf id={props.match.params.id}/>}/>
        <Route exact  path="/profile/editEvent/:id" render ={(props)=> < Editevent id={props.match.params.id}/>}/>
</div>


    </div>
)
export default Navigation