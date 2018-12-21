import React, { Component } from 'react';
import SliderArea from "../componentsHome/sliderArea";
import TitleCarousel from "../componentsHome/titleCarouselLogOut";
import Service from "../componentsHome/service"
import AboutUs from "../componentsHome/aboutUs";
import CoursesHome from "../componentsHome/coursesHome";
import CounterUp from "../componentsHome/counterUp";
import EventHome from "../componentsHome/eventHome";
import Staff from "../componentsHome/experiencedStaff";
import CallToAction from "../componentsHome/callToAction";
import LatestNews from "../componentsHome/latestNews";
import PeopleSay from "../componentsHome/peopleSay";


import "../css/style.css"
import "../css/animate.css"
import "../css/color-style.css"
import "../css/magnific-popup.css"
import "../css/off-canvas.css"
import "../css/rsmenu-main.css"
import "../css/rsmenu-transitions.css"
import "../css/slick.css"
import "../css/timeline.css"
import "../css/responsive.css"


class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            currentUserName:"",
            currentUserEmail:""
        }
    }
    componentDidMount(){
        const idToken=JSON.parse(localStorage.getItem('okta-token-storage'))
        this.setState({
            currentUserEmail:idToken.idToken.claims.email,
            currentUserName:idToken.idToken.claims.name,
            currentUserPassword:idToken.idToken.claims.password,
        })
    }
    render() {
        console.log(JSON.parse(localStorage.getItem('okta-token-storage')))
        return (
            <div style={{position:"relative"}}>
                <SliderArea/>
                <TitleCarousel logout={()=>this.props.logout()} username={this.state.currentUserName}/>
                <Service/>
                <AboutUs/>
                <CoursesHome/>
                <CounterUp/>
                <EventHome/>
                <Staff/>
                <CallToAction/>
                <LatestNews/>
                <PeopleSay/>
            </div>
        );
    }
}

//export default Home;