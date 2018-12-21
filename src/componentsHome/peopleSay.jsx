import React,{Component} from "react";
import axios from "axios";
import WhatPeopleSayItem from "./whatPeopleSayItem";


class PeopleSay extends Component{
    state={
        tabPeople:[{
            name:"",
            image:"",
            para:""
        }]
    }

    componentDidMount(){
        axios.get("/feedback").then(res=>this.setState({
            tabPeople:res.data
        }))
    }
    render(){


        return(
            <div id="rs-testimonial" className="rs-testimonial bg5 sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-4 col-md-12">
                            <div className="sec-title mb-30">
                                <h2 className="white-color">WHAT PEOPLE SAYS</h2>
                                <p className="white-color">Fusce sem dolor inter in efficitur faucibus.</p>
                            </div>
                            <p className="white-color mobile-mb-50">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized
                            </p>
                        </div>

                        {this.state.tabPeople.map((el,i)=><WhatPeopleSayItem key={i} el={el}/>)}

                    </div>
                </div>
            </div>
        )
    }
}
export default PeopleSay
