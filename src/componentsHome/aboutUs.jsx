import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div id="rs-about-2" className="rs-about-2 sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-bottom">
                        <div className="col-lg-7 col-md-12">
                            <div className="sec-title mb-30">
                                <h2>ABOUT US</h2>
                                <p>Fusce sem dolor, interdum in efficitur at, faucibus.</p>
                            </div>
                            <p className="mobile-mb-50">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized.can I get some?There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered alteration in some form, by injected
                                yours humour, or randomised words which don't look even slightly believable.
                            </p>
                            <div className="row about-signature">
                                <div className="col-md-6">
                                    <h4>Rashid Mahabub Shojib</h4>
                                    <span>Vice Chancellor (vc)</span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <img src="images/about/signature.png" alt="signature"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="about-img rs-image-effect-shine">
                                <img src="images/about/about2.jpg" alt="img02"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;