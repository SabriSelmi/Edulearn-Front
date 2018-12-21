import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import mission1 from './mission1.jpg';
import mission2 from './mission1.jpg';

class Mission extends Component {
    render() {
        return (
            <div className="rs-mission sec-color sec-spacer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mobile-mb-50">
                            <div className="abt-title">
                                <h2>OUR MISSION</h2>
                            </div>
                            <div className="about-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehe derit in voluptate velit esse cillum.</p>

                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so
                                    beguiled and demoralized by the charms of pleasure of the moment, that they cannot
                                    fore see the pain and trouble that are bound to ensue; and equal blame belongs to
                                    those who fail in their duty.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-md-6 mobile-mb-30">
                                    <NavLink to="#">
                                        <img src={mission1} alt="Mission"/>
                                    </NavLink>
                                </div>
                                <div className="col-md-6">
                                    <NavLink to="#">
                                        <img src={mission2} alt="Mission"/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mission;