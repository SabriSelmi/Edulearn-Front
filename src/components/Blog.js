import React, { Component } from 'react';
import StartBlog from '../componentsBlog/startBlog';
import ItemsBlog from "../componentsBlog/itemsBlog";



class Blog extends Component{
    render(){
        return(
            <div>
                <StartBlog/>
                <ItemsBlog/>
            </div>
        )
    }

}
export default Blog;