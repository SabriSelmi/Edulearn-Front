import React, { Component } from 'react';
import {NavLink} from "react-router-dom";


class Footer extends Component {
  render() {
    return (       <footer id="rs-footer" className="bg3 rs-footer mt-5" >
    <div className="container mt-5">
        <div>
            <div className="row footer-contact-desc">
                <div className="col-md-4">
                    <div className="contact-inner">
                        <i className="fa fa-map-marker"></i>
                        <h4 className="contact-title">Address</h4>
                        <p className="contact-desc">
                            503  Old Buffalo Street<br/>
                            Northwest #205, New York-3087
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-inner">
                        <i className="fa fa-phone"></i>
                        <h4 className="contact-title">Phone Number</h4>
                        <p className="contact-desc">
                            +3453-909-6565<br/>
                            +2390-875-2235
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-inner">
                        <i className="fa fa-map-marker"></i>
                        <h4 className="contact-title">Email Address</h4>
                        <p className="contact-desc">
                            infoname@gmail.com<br/>
                            www.yourname.com
                        </p>
                    </div>
                </div>
            </div>					
        </div>
    </div>
    

    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <div className="about-widget">
                        <img src="images/logo-footer.png" alt="Footer Logo"/>
                        <p>We create Premium Html Themes for more than three years. Our team goal is to reunite the elegance of unique.</p>
                        <p className="margin-remove">We create Unique and Easy To Use Flexible Html Themes.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <h5 className="footer-title">RECENT POSTS</h5>
                    <div className="recent-post-widget">
                        <div className="post-item">
                            <div className="post-date">
                                <span>28</span>
                                <span>June</span>
                            </div>
                            <div className="post-desc">
                                <h5 className="post-title"><NavLink to="#">While the lovely valley team work</NavLink></h5>
                                <span className="post-category">Keyword Analysis</span>
                            </div>
                        </div>
                        <div className="post-item">
                            <div className="post-date">
                                <span>28</span>
                                <span>June</span>
                            </div>
                            <div className="post-desc">
                                <h5 className="post-title"><NavLink to="#">I must explain to you how all this idea</NavLink></h5>
                                <span className="post-category">Spoken English</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <h5 className="footer-title">OUR SITEMAP</h5>
                    <ul className="sitemap-widget">
                        <li className="active"><NavLink to="/"><i className="fa fa-angle-right" aria-hidden="true"></i>Home</NavLink></li>
                        <li ><NavLink to="/about"><i className="fa fa-angle-right" aria-hidden="true"></i>About</NavLink></li>
                        <li><NavLink to="/course"><i className="fa fa-angle-right" aria-hidden="true"></i>Courses</NavLink></li>

                        <li><NavLink to="/event"><i className="fa fa-angle-right" aria-hidden="true"></i>Events</NavLink></li>

                        <li><NavLink to="/blog"><i className="fa fa-angle-right" aria-hidden="true"></i>Blog</NavLink></li>

                        <li><NavLink to="/profile"><i className="fa fa-angle-right" aria-hidden="true"></i>Profile</NavLink></li>
                        <li><NavLink to="/contact"><i className="fa fa-angle-right" aria-hidden="true"></i>Contact</NavLink></li>

                    </ul>
                </div>
                <div className="col-lg-3 col-md-12">
                    <h3 className="footer-title">FLICKR FEED</h3>
                    <ul className="flickr-feed">
                        <li><NavLink to="#"><img src="images/flickr/1.jpg" alt="Project Image"/></NavLink></li>
                        <li><NavLink to="#"><img src="images/flickr/2.jpg" alt="Project Image"/></NavLink></li>
                        <li><NavLink to="#"><img src="images/flickr/3.jpg" alt="Project Image"/></NavLink></li>
                        <li><NavLink to="#"><img src="images/flickr/4.jpg" alt="Project Image"/></NavLink></li>
                        <li><NavLink to="#"><img src="images/flickr/5.jpg" alt="Project Image"/></NavLink></li>
                        <li><NavLink to="#"><img src="images/flickr/6.jpg" alt="Project Image"/></NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="footer-share">
                <ul>
                    <li><NavLink to="#"><i className="fa fa-facebook"></i></NavLink></li>
                    <li><NavLink to="#"><i className="fa fa-google-plus"></i></NavLink></li>
                    <li><NavLink to="#"><i className="fa fa-twitter"></i></NavLink></li>
                    <li><NavLink to="#"><i className="fa fa-pinterest-p"></i></NavLink></li>
                    <li><NavLink to="#"><i className="fa fa-vimeo"></i></NavLink></li>
                </ul>
            </div>                                
        </div>
    </div>

    <div className="footer-bottom">
        <div className="container">
            <div className="copyright">
                <p>© 2018 <NavLink to="#">RS Theme</NavLink>. All Rights Reserved.</p>
            </div>
        </div>
    </div>
</footer>

    );
  }
}

export default Footer;
