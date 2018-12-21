import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import vision from './vision.jpg';


class Vision extends Component {
    render() {
        return (
<div className="rs-vision sec-spacer">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 mobile-mb-50">
                <div className="vision-img rs-animation-hover">
                    <img src={vision} alt="img02"/>
                    <NavLink className="popup-youtube rs-animation-fade" to="https://www.youtube.com/watch?v=3f9CAMoj3Ec"
                       title="Video Icon">
                    </NavLink>
                    <div className="overly-border"></div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="abt-title">
                    <h2>OUR VISION</h2>
                </div>
                <div className="vision-desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe derit in
                        voluptate velit esse cillum.</p>

                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot fore
                        see the pain and trouble that are bound to ensue; and equal who fail in their duty.</p>
                </div>
            </div>
        </div>
    </div>
</div>);
}
}

export default Vision;