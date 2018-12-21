import React,{Component} from "react";

class Service extends Component{
    render(){
        return(
            <div className="rs-services rs-services-style1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="services-item rs-animation-hover">
                                <div className="services-icon">
                                    <i className="fa fa-american-sign-language-interpreting rs-animation-scale-up"></i>
                                </div>
                                <div className="services-desc">
                                    <h4 className="services-title">Trending Courses</h4>
                                    <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="services-item rs-animation-hover">
                                <div className="services-icon">
                                    <i className="fa fa-book rs-animation-scale-up"></i>
                                </div>
                                <div className="services-desc">
                                    <h4 className="services-title">Books & Liberary</h4>
                                    <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="services-item rs-animation-hover">
                                <div className="services-icon">
                                    <i className="fa fa-user rs-animation-scale-up"></i>
                                </div>
                                <div className="services-desc">
                                    <h4 className="services-title">Certified Teachers</h4>
                                    <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="services-item rs-animation-hover">
                                <div className="services-icon">
                                    <i className="fa fa-graduation-cap rs-animation-scale-up"></i>
                                </div>
                                <div className="services-desc">
                                    <h4 className="services-title">Certification</h4>
                                    <p>Lorem ipsum dolor sit amet Sed nec molestie justo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Service;