import React, { Component } from 'react';
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Header from "./components/Header";
//import Home from "./components/HomeAuth";
import Home from "./components/Home"
import {Route} from "react-router-dom";
import Profile from "./components/Profile";
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react';
import Login from "./authent/login";
// hello world




import ScrollUp from "./components/scrollUp";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Course from "./components/coursecomponent/course";
import Event from "./components/eventcomponent/event";
import axios from "axios";

/*const config = {
    issuer: 'https://dev-387251.oktapreview.com/oauth2/default',
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: '0oaib68w2inBYj5gf0h7'
}
function onAuthRequired({history}){
    history.push('/login')
}*/

class App extends Component {
    constructor(){
        super()
        this.state={
        isIdent:'',
        role:'',
        nav:true,

    }}
aspire=(x,y)=>{
    if (x===true && (y===0 || y===1 || y===2 || y===3 || y===4))
    this.setState({

        isIdent:x,
        role:y
    })
    else
        this.setState({
            isIdent:false
        })

}
aspire1=(x)=>{
        this.setState({
            nav:x
        })
}

    render() {

        return (
           /* <Security issuer={config.issuer}
                      client_id={config.client_id}
                      redirect_uri={config.redirect_uri}
                      onAuthRequired={onAuthRequired}
            >*/
            <div className="App">
                <Header isIdent={this.state.nav}/>
                <Route exact path="/" render={()=><Home />}/>
                <Route path="/about" render={()=> <About/>}/>
                {/*<SecureRoute exact path="/staff" render={()=> <Blog/> }/>*/}
                <Route exact path="/blog" render={()=> <Blog/> }/>
                <Route exact path="/blog-details" render={()=><BlogDetails/>  }/>
                <Route path ="/contact" render={()=><Contact/>}/>
                <Route path="/course" render={()=><Course/>}/>
                <Route path="/event" render={()=><Event/>}/>
                <Route  path="/profile" render ={()=><Profile aspire={(x,y)=>this.aspire(x,y)} stateApp={this.state} aspire1={(x)=>this.aspire1(x)}/>}/>
                {/*<Route exact path="/login" render={()=><Login  baseUrl="https://dev-387251.oktapreview.com"/>}/>
                <Route path="/implicit/callback" component={ImplicitCallback}/>*/}
                <ScrollUp/>
                <Footer/>
            </div>
        /*</Security>*/
   );
 }
}
 export default App;
