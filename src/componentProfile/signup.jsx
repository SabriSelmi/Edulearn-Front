/*import React,{Component} from "react";
import {NavLink} from "react-router-dom";


export default class Signpage extends Component{
    constructor(props){
        super(props)
        this.state={
            firstN:'',
            lastN:'',
            email:'',
            pass:"",
            passAgain:"",
        }
    }
    onchange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            <div className="container login-container">
                <div className="row">
                    <span className="col-md-3"></span>
                    <div className="col-md-6 login-form-1">
                        <h3>Sign Up</h3>
                        <form>
                            <div className="form-group">
                                <h5 className="text-primary text-center">First Name </h5>
                                <input type="text" className="form-control" placeholder="Your First Name *" name="firstN" onChange={this.onchange}/>
                            </div>
                            <div className="form-group">
                                <h5 className="text-primary text-center">Last Name </h5>
                                <input type="text" className="form-control" placeholder="Your Last Name *" name="lastN" onChange={this.onchange}/>
                            </div>
                            <div className="form-group">
                                <h5 className="text-primary text-center">Adress Email </h5>
                                <input type="text" className="form-control" placeholder="Your Email *" name="email" onChange={this.onchange}/>
                            </div>
                            <div className="form-group">
                                <h5 className="text-primary text-center">Password </h5>
                                <input type="password" className="form-control" placeholder="Your Password *" name="pass" onChange={this.onchange}/>
                            </div>
                            <div className="form-group">
                                <h5 className="text-primary text-center">Confirm Password </h5>
                                <input type="password" className="form-control" placeholder="Your Password *" name="passAgain" onChange={this.onchange}/>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" className="btnSubmit" value="Sign Up"/>
                            </div>
                        </form>
                        <div className="form-group text-center">
                            <a href="#" className="ForgetPwd text-danger">You have already an account?</a>
                        </div>
                        <div className="form-group text-center">
                            <button className="btnSubmit1" > <NavLink  to="/profile/login" style={{color:"white"}}>Login</NavLink></button>
                        </div>
                    </div>
                    <span className="col-md-3"></span>
                </div>
            </div>
        )
    }
}*/