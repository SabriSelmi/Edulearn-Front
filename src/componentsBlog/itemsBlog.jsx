import React, { Component } from 'react';
import ItemBlog from "./itemBlog";

import axios from "axios";

class ItemsBlog extends Component {
    constructor(props){
        super(props)
        this.state={
            tabBlog:[
            {
            imgBlog:"",
            dateBlog:"",
            titleBlog:"",
            paragrapheBlog:""
            }
        ]}

    }

    componentDidMount(){
        axios.get("/blog").then(res=>this.setState({
            tabBlog:res.data
        }))
    }
    render() {
        return (
            <div className="blog-page-area sec-spacer">
                <div className="container">
                    {this.state.tabBlog.map((el,i)=><ItemBlog key={i} element={el}/>)}
                </div>
            </div>
        );
    }
}

export default ItemsBlog;
