import React,{Component} from "react";
import Loginpage from "../componentProfile/login";
import './profile.css'
import {Route} from "react-router-dom";

import "../css/rsmenu-main.css";
import "../css/rsmenu-transitions.css";
import "../css/style.css"
export default class Profile extends Component{
    render(){
        return(

            <Route  path="/profile" render={()=><div style={{marginBottom:"10%"}}><Loginpage aspire={(x,y)=>this.props.aspire(x,y)} stateApp={this.props.stateApp} aspire1={(x)=>this.props.aspire1(x)}/></div>}/>

        )
    }
}