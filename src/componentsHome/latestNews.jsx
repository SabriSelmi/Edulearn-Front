import React,{Component} from "react";
import {Carousel} from "react-responsive-carousel";

import axios from "axios";
import LatestNewsItem from "./latestNewsItem";



class LatestNews extends Component{
    state={
        tabNews:[{
            image:"",
            date:"",
            title:"",
            para:""
        }]
    }

    componentDidMount(){
        axios.get("/latestnews").then(res=>this.setState({
            tabNews:res.data
        }))
    }

    render(){
        return(
            <div id="rs-latest-news" className="rs-latest-news sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-4 col-md-12">
                            <div className="sec-title mb-30">
                                <h2>LASTEST NEWS</h2>
                                <p>Fusce sem dolor inter in efficitur faucibus.</p>
                            </div>
                            <p className="mobile-mb-50">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized
                                .
                            </p>
                        </div>
                        <span className="col-lg-3"></span>
            <Carousel className="col-lg-5 carousel"  autoPlay={true} showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false} >

                {this.state.tabNews.map((el,i)=><LatestNewsItem key={i} el={el}/>)}
            </Carousel>


</div>
                </div>
            </div>






        )
    }
}
export default LatestNews;