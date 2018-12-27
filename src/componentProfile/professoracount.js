import React,{Component} from "react";
import Sidebarmenu from './sidebarmenu';
import {NavLink,Route} from 'react-router-dom';
import Avatar from "../images/gallery/kids/1.jpg";
import Professorclasses from './ProfClasses';
import Professorgrades from './professorGrades';
import ProfessorgradesB from './professorGradesB';
import Professorcalender from './ProfCalender';
import axios from "axios";
class Professor extends React.Component {

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
    render() {
        console.log(this.props)
      return (
        <div>
    <div className="page-content-wrapper col-lg-11 col-md-9 col-sm-9 m-3 m-5 ">
                <div className="card card-topline-aqua" >
                    <div className="card-body no-padding height-9">
                        <div className="row">
                            <div className="profile-userpic">
                                <img src={Avatar} className="img-responsive" alt=""/></div>
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">{this.props.user.name}</div>
                            <div className="profile-usertitle-job"> Professor</div>
                        </div>
                        <ul className="list-group list-group-unbordered">
                            <li className="list-group-item">
                                <b>Email</b> <NavLink to="#" className="pull-right">{this.props.user.email}</NavLink>
                            </li>
                            <li className="list-group-item">
                                <b>Student</b> <NavLink to="#" className="pull-right">250</NavLink>
                            </li>
                            <li className="list-group-item">
                                <b>Friends</b> <NavLink to="#" className="pull-right"></NavLink>
                            </li>
                        </ul>

                        <div className="profile-userbuttons">
                          <NavLink type="button" className="btn btn-circle green btn-sm" to="/profile/classes">Classes</NavLink>
                          <NavLink type="button" className="btn btn-circle  yellow btn-sm" to="/profile/grades">Grades</NavLink>
                          <NavLink type="button" className="btn btn-circle  blue btn-sm" to="/profile/calender">Calender</NavLink>
                          <NavLink type="button" className="btn btn-circle red btn-sm" to="/profile" onClick={this.props.Click}>Logout</NavLink>
                        </div>

                    </div>
                </div>
                <Route exact path="/profile/classes" render ={(props)=> < Professorclasses id={this.props.user._id}/>}/>
                <Route exact path="/profile/grades"  render ={(props)=> <Professorgrades id={this.props.user._id}/>}/>
                <Route exact path="/profile/gradesB"  render ={(props)=> <ProfessorgradesB id={this.props.user._id}/>}/>
                <Route exact path="/profile/gradesC"  render ={(props)=> <Professorgrades id={this.props.user._id}/>}/>
                <Route exact path="/profile/calender" render={()=><Professorcalender roomData={this.state.roomData}/>}/>
</div>
        </div>
      );
    }
  }
  
  export default Professor 