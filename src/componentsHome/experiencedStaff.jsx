import React, { Component } from 'react';

import StaffElement from "./staffItem";
import axios from "axios";


class Staff extends Component{
    constructor(){
        super()
        this.state={

            tabStaff:[
                {
                    image:"",
                    name:"",
                    subtitle:"",
                    description:"",

                }
            ]

        }
    }

    componentDidMount(){
        axios.get("/staff").then(res=>this.setState({
            tabStaff:res.data
        }))
    }
    render(){
        return(
            <div id="rs-team" className="rs-team sec-color sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-6 col-md-12">
                            <div className="sec-title mb-30">
                                <h2>EXPERIENCED STAFFS</h2>
                                <p>Fusce sem dolor inter in efficitur faucibus.</p>
                            </div>
                            <p className="mobile-mb-50">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized
                                .
                            </p>
                        </div>



                                {this.state.tabStaff.map((el,i)=><StaffElement key={i} el={el}/>)}




                    </div>
                </div>
            </div>
        )
    }
}
export default Staff;