import React, { Component } from 'react';
import SliderArea from "../componentsHome/sliderArea";
import TitleCarousel from "../componentsHome/titleCarousel";
import Service from "../componentsHome/service"
import AboutUs from "../componentsHome/aboutUs";
import CoursesHome from "../componentsHome/coursesHome";
import CounterUp from "../componentsHome/counterUp";
import EventHome from "../componentsHome/eventHome";
import Staff from "../componentsHome/experiencedStaff";
import CallToAction from "../componentsHome/callToAction";
import LatestNews from "../componentsHome/latestNews";
import PeopleSay from "../componentsHome/peopleSay";


/*import "../css/style.css"
import "../css/animate.css"
import "../css/color-style.css"
import "../css/magnific-popup.css"
import "../css/off-canvas.css"
import "../css/rsmenu-main.css"
import "../css/rsmenu-transitions.css"
import "../css/slick.css"
import "../css/timeline.css"
import "../css/responsive.css"*/


class Home extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        return (
            <div style={{position:"relative"}}>
               <SliderArea/>
                {/*<TitleCarousel login={()=>this.props.login()}/>*/}
                <TitleCarousel/>
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

export default Home;