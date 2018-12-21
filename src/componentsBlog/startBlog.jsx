import React, { Component } from 'react';
import {NavLink} from "react-router-dom";






class StartBlog extends Component {
    render() {
        return (
            <div className="rs-breadcrumbs bg7 breadcrumbs-overlay">
                <div className="breadcrumbs-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="page-title">blog post</h1>
                                <ul>
                                    <li>
                                        <NavLink className="active" to="index.html">Home</NavLink>
                                    </li>
                                    <li>blog post</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartBlog;
