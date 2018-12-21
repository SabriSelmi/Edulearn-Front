import React from "react";
import ScrollToTop from "react-scroll-up";

export default class ScrollUp extends React.Component {
    render() {
        return (
            <ScrollToTop style={{backgroundColor:"red",width:"40px",height:"40px"}}showUnder={160}>
                <span><h1 style={{color:"white", marginLeft:"30%",marginTop:"10%",fontSize:"2rem"}}>^</h1></span>
            </ScrollToTop>
        );
    }
}