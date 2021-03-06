import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import Dashboard from "../assistanAdmin/dashboard";
import axios from "axios";
import Professor from './professoracount';
import Parent from '../assistanAdmin/componentParent/parent';
import'./login.css';
export default class Loginpage extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            pass:"",

            isIdent:false,
            user:{},
            users:[
                {
                    name:"",
                    email:"",
                    password:"",
                    role:""

                }
            ]
        }
    }

    componentDidMount(){
        axios.get("/users").then(res=>this.setState({
            users:res.data
        }))

    }

    onchange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    search=(event)=>{
        var user=this.state.users.filter(el=>`${el.password}${el.email}`===`${this.state.pass}${this.state.email}`)
        if (user.length===0 ) {
            user[0] = {role: 5}
            alert("user undefined");
            event.preventDefault()
        }
        this.setState({
            user:user[0]
        })
 
        this.props.aspire(true,user[0])
     }
    fakeAuth=()=>{
        this.setState({
            isIdent:true,

        })
    }
    fakeDisconnect=()=>{
        this.setState({
            isIdent:false,
            email:"",
            pass:""
        })
        this.props.aspire(false,this.state.user.role)
    }
    render(){
       
     if (this.props.stateApp.role===0 && this.props.stateApp.isIdent)
        {
           return (<Dashboard Click={this.fakeDisconnect} user={this.props.stateApp.user} aspire1={(x)=>this.props.aspire1(x)}/>);
        }
       else
       if (this.props.stateApp.role===2 && this.props.stateApp.isIdent) {
           return (<Professor Click={this.fakeDisconnect} user={this.props.stateApp.user} users={this.state.users} aspire1={(x)=>this.props.aspire1(x)} onClick={this.fakeDisconnect}/>);
       }
        else
       if (this.props.stateApp.role===1 && this.props.stateApp.isIdent) {
           return (<div style={{marginTop:"20%"}}><h1>professor: Welcome {this.state.user.name}</h1><NavLink to="/profile/login" ><button onClick={this.fakeDisconnect}>logout</button></NavLink></div>);
       }
        else
       if (this.props.stateApp.role===3 && this.props.stateApp.isIdent) {
           return <Parent Click={this.fakeDisconnect} user={this.props.stateApp.user} aspire1={(x)=>this.props.aspire1(x)}  onClick={this.fakeDisconnect}/>;
       }
        else
       if (this.props.stateApp.role===4 && this.props.stateApp.isIdent) {
           return (<div style={{marginTop:"20%"}}><h1>Student: Welcome {this.state.user.name}</h1><NavLink to="/profile/login" ><button onClick={this.fakeDisconnect}>logout</button></NavLink></div>);
       }
       else return (
             
                    <div className="row firas">
                        <span className="col-md-3"></span>
                        <div className="col-md-6 login-form-1">
                            <h3>Login</h3>

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" name="email" onChange={this.onchange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" name="pass" onChange={this.onchange}/>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" className="btnSubmit" value="Login" onClick={(event)=>{this.search(event);this.fakeAuth()}}/>
                            </div>
                            <div className="form-group text-center">
                                <NavLink to="#" className="ForgetPwd">Forget Password?</NavLink>
                            </div>
                        </div>
                        <span className="col-md-3"></span>
                    </div>
              
               
            )
        }

    }
