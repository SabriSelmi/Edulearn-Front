import React, { Component } from 'react';
import './components.css'
class Navbar extends Component {
  render() {
    return (   
		<div className="full-width-header">
			<div className="rs-toolbar">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="rs-toolbar-left">
								<div className="welcome-message">
									<i className="glyph-icon flaticon-placeholder"></i>
                                    <span>Edulearn NYC, USA</span> 
								</div>
								<div className="welcome-message">
									<i className="glyph-icon flaticon-phone-call"></i>
                                    <span><a href="tel:1234567890">+1234-567-890</a></span> 
								</div>
								<div className="welcome-message">
									<i className="glyph-icon flaticon-email"></i>
                                    <span><a href="mailto:info@domain.com">info@domain.com</a></span> 
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="rs-toolbar-right">
								<div className="toolbar-share-icon">
									<ul>
										<li><a href="#"><i className="fa fa-facebook"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter"></i></a></li>
										<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
								<a className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#">
                                            <i className="fa fa-search"></i>
                                        </a>
							</div>
						</div>
					</div>
				</div>
			</div>
      <header id="rs-header" class="rs-header">
				<div class="menu-area menu-sticky-sticky">
					<div class="container">
				        <div class="row">
                            <div class="col-lg-4 col-md-12">
                                <div class="logo-area">
                                    <a href="index.html"><img src="../images/logo2.png" alt="logo"/></a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-12">
                                <div class="main-menu">
                                    <a class="rs-menu-toggle"><i class="fa fa-bars"></i>Menu</a>
                                    <nav class="rs-menu">
                                        <ul class="nav-menu">
                                       
                                            <li class="current-menu-item current_page_item menu-item-has-children"> <a href="#" class="home">Home</a>
      
                                            </li>
                                            <li class="menu-item-has-children"> <a href="#">About Us</a>
                                 </li>
                                            <li class="menu-item-has-children"> <a href="#">Pages</a>
                                                <ul class="sub-menu"> 

                                                    <li class="menu-item-has-children"> <a href="#">Teachers</a>
                                                      <ul class="sub-menu">
                                                        <li> <a href="teachers.html">Teachers</a> </li>
                                                        <li> <a href="teachers-without-filter.html">Teachers Without Filter</a> </li> 
                                                        <li> <a href="teachers-single.html">Teachers Single</a> </li>
                                                      </ul>
                                                    </li>
                                                </ul>
                                            </li>
                               
                                            <li class="menu-item-has-children"> <a href="#">Courses</a>
                                              <ul class="sub-menu">
                                                <li><a href="courses.html">Courses One</a></li>
                                                <li><a href="courses2.html">Courses Two</a></li>
                                                <li><a href="courses-details.html">Courses Details</a></li>
                                                  <li><a href="courses-details2.html">Courses Details 2</a></li>
                                              </ul>
                                    </li>
                                            <li class="menu-item-has-children"> <a href="#">Events</a>
                                                <ul class="sub-menu">
                                                    <li><a href="events.html">Events</a></li>
                                                    <li><a href="events-details.html">Events Details</a></li>
                                                </ul>
                                            </li>
     
                                            <li> <a href="contact.html">Contact</a></li>
                                         
                                        </ul>
                                    </nav>
                                    <div class="apply-box">
                                        <a href="#" class="apply-btn">Apply Now</a>
                                    </div>
                            </div>
                        </div>
						</div>
					</div>
				</div>
			</header>
      </div>

    );
  }
}

export default Navbar;


















