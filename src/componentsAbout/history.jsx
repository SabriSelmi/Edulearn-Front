import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import history from './history.jpg'









class History extends Component {
    render() {
        return (
<div className="rs-history sec-spacer">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 rs-vertical-bottom mobile-mb-50">
                <NavLink to="#">
                    <img src={history} alt="History"/>
                </NavLink>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="abt-title">
                    <h2>OUR HISTORY</h2>
                </div>
                <div className="about-desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe derit in
                        voluptate velit esse cillum.</p>

                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot fore
                        see the pain and trouble that are bound to belongs to who fail in their duty.</p>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default History;