import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './titleCarousel.css'

class TitleCarousel extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <div  style={{position:"absolute",top:"2vw", left:"5vw"}}>
                <h1 className="font-weight-bold text-white testText animated  fadeInLeft">Welcome {this.props.username} !</h1>
                <h1 className="font-weight-bold text-white testText animated  fadeInLeft" style={{fontSize:"5vw"}}>WELCOME<br/>TO OUR UNIVERSITY</h1>
                <p className="text-white font-weight-bold animated fadeInUp" style={{fontSize:"1.5vw"}}>Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo.<br/> Nunc quis sapien in arcu pharetra
                    volutpat.Morbi nec vulputate dolor.
                </p>
                <NavLink to="#" ><button className="btn btn-dark animated fadeInUp">READ MORE</button></NavLink>
                <NavLink to="#" ><button className="btn btn-danger ml-3 animated fadeInUp" onClick={()=>this.props.logout()}>Log Out</button></NavLink>
            </div>






        );
    }
}

export default TitleCarousel;