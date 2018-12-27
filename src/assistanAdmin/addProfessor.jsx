import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import axios from 'axios';
import "./theme_style.css";
import "./theme-color.css";
import "./style.css";
import CSVReader from 'react-csv-reader';


class AddProfessor extends Component{
    constructor(props){
        super(props)
        this.state={
                            name:"",
                            lastname:"",
                            mobile:"",
                            email:"",
                            
                                departement1:"",
                                departement2:"",
                                departement3:"",
                            
                            admissiondate:"",
                            password:"",
                            class:"",
                            dateofbirth:"",
                            adresse:"",
                            classes:[]
                            
            
        }
    
    
    
    }

    componentDidMount =()=>{
        axios.get("/courses").then(res=>
          this.setState({
            classes:res.data
          }))    
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
        axios.post('/professor',{...this.state})
        .then(res => console.log(res.data))
        .catch(err => console.log("err"));

        axios.post('/users',{...this.state})
        .then(res => console.log(res.data))
        .catch(err => console.log("err"));
    }
    render(){
        console.log(this.state.classes)
        return(
            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3" >

<CSVReader
        cssClass="csv-reader-input"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={this.handleForce}
        onError={this.handleDarkSideForce}
        inputId="ObiWan"
        inputStyle={{color: 'red'}}
      />
                <div className="page-content">

                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Add Professor</div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 ">
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
                                                    <input type="text" name="name" data-required="1" value={this.state.name}  onChange={this.onchange}  
                                                           placeholder="enter first name"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Last Name
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="lastname" data-required="1" onChange={this.onchange}  value={this.state.lastname}
                                                           placeholder="enter last name"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Email
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-envelope text-info"></i></div>
                                                        </div>
                                                        <input type="email" className="form-control" id="nombre" onChange={this.onchange}  value={this.state.email}
                                                               name="email" placeholder="ejemplo@gmail.com" required/>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Joining Date
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div> 
                                                        <input type="calendar" className="form-control" id="nombre" onChange={this.onchange}  value={this.state.admissiondate}
                                                               name="admissiondate" placeholder="dd/mm/yy" required/>
                                                    </div>
                                                    <input type="hidden" id="dtp_input2" value=""/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Password  
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="password" name="password" data-required="1"  onChange={this.onchange}  value={this.state.password}
                                                           placeholder="enter Password"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Confirm Password
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="password" name="cnfmPwd" data-required="1" 
                                                           placeholder="Reenter your password"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Class1
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control input-height" name="departement1" onChange={this.onchange}  value={this.state.departement1}>
                                                     
                                                        {
                                                       this.state.classes.map((el,index)=>
                                                       <option key={index} value={el.nom}>{el.nom}</option>
                                                     )}
													
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Class2
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control input-height" name="departement2" onChange={this.onchange}  value={this.state.departement2}>
                                                     
                                                        {
                                                       this.state.classes.map((el,index)=>
                                                       <option key={index} value={el.nom}>{el.nom}</option>
                                                     )}
													
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Class3
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control input-height" name="departement3" onChange={this.onchange}  value={this.state.departement3}>
                                                     
                                                        {
                                                       this.state.classes.map((el,index)=>
                                                       <option key={index} value={el.nom}>{el.nom}</option>
                                                     )}
													
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Gender
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control input-height" name="gender" onChange={this.onchange}  value={this.state.gender}> 
                                                        <option value="">Select...</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Mobile No.
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="mobile" type="text" placeholder="mobile number" onChange={this.onchange}  value={this.state.mobile}
                                                           className="form-control input-height"/></div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Birth Date
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div>
                                                        <input type="calendar" className="form-control" id="nombre" onChange={this.onchange}  value={this.state.dateofbirth}
                                                               name="dateofbirth" placeholder="dd/mm/yy" required/>
                                                    </div>
                                                    <input type="hidden" id="dtp_input5" value=""/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Address
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <textarea name="address" placeholder="address"
                                                              className="form-control-textarea" rows="5"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Profile Picture
                                                </label>
                                                <div className="compose-editor">
                                                    <input type="file" className="default" multiple/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Education
                                                </label>
                                                <div className="col-md-8">
                                                    <textarea name="address" className="form-control-textarea"
                                                              placeholder="Education" rows="5"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-actions">
                                                <div className="row">
                                                <div className="offset-md-3 col-md-9">
                                                        <button type="submit" className="btn btn-info m-r-20" onClick={this.onsubmit}>
                                                       <Link to='/profile/staff'>Submit</Link> </button>
                                                        <button type="button" className="btn btn-default">Cancel
                                                        </button>
                                                    </div>
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
export default AddProfessor;





