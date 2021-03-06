import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import axios from "axios";
import FlashMassage from 'react-flash-message';

class AddEvent extends Component{
constructor(props){
    super(props)
    this.state={
     
        title:"",
        time:"",
        date:"",
        place:"",
        history:"",
        like:"",
        avatar:"",
        userlike: [
            {name:"Sabri"},
            {name:"Firas"}
        ],
        image:[
            {
                "src" : "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            {
                "src" : "https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            },
            {
                "src" : "https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
        ]

     




					
                        
        
    }



}
handleForce = data => {
    var  name= data[0].toString();
     var lastname =  data[1].toString()
     var mobile =  data[2].toString();
data= {
name: name,
designation:lastname,
mobile:lastname
}											
     axios.post('/professor',data)
     .then(res => console.log(res.data))
     .catch(err => console.log("err"))
  };
onchange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
onsubmit = (e) =>{
    e.preventDefault();
    axios.post('/events',{...this.state})
    .then(res => console.log(res.data))
    .catch(err => console.log("err"));
}
    render(){
        return(
            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Add Student</div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Basic Information</header>

                                </div>
                                <div className="card-body" id="bar-parent">
                                    <form action="#" id="form_sample_1" className="form-horizontal">
                                        <div className="form-body">
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">First Name
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="name" placeholder="enter first name"
                                                           className="form-control input-height" onChange={this.onchange}  value={this.state.name} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                                <label className="control-label col-md-3">Time
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div> 
                                                        <input type="calendar" className="form-control" id="nombre" onChange={this.onchange}  value={this.state.time}
                                                               name="time" placeholder="dd/mm/yy" required/>
                                                    </div>
                                                    <input type="hidden" id="dtp_input2" value=""/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Date
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div> 
                                                        <input type="calendar" className="form-control" id="nombre" onChange={this.onchange}  value={this.state.date}
                                                               name="date" placeholder="dd/mm/yy" required/>
                                                    </div>
                                                    <input type="hidden" id="dtp_input2" value=""/>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Location
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="location" placeholder="enter first name"
                                                           className="form-control input-height" onChange={this.onchange}  value={this.state.location} />
                                                </div>
                                            </div>
                                       
                                                
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">history
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="history" placeholder="enter first name"
                                                           className="form-control input-height" onChange={this.onchange}  value={this.state.history} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">like
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="like" placeholder="enter first name"
                                                           className="form-control input-height" onChange={this.onchange}  value={this.state.like} />
                                                </div>
                                            </div>
                                            <div className="form-actions">
                                                <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                      
                                                       <button type="submit" className="btn btn-info m-r-20" onClick={this.onsubmit} ><Link to='/profile/event'> Submit </Link> </button>
                                                     
                                                        <button Redirect to='/profile/event' type="button" className="btn btn-default">Cancel

                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddEvent;