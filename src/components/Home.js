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


class Home extends Component {
    render() {
        return (
            <div style={{position:"relative"}}>
               <SliderArea/>
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