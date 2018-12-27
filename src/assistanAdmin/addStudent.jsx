import React,{Component} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class AddStudent extends Component{
constructor(props){
    super(props)
    this.state={
     
          
						name:"",
						lastname:"",
						mobile:"",
						email:"",
						departement:"",
						admissiondate:"",
						type:"",
						class:"",
						dateofbirth:"",
                        adresse:"",
                        parentName:"",
                        parentEmail:"",
                        parentNumber:""
                        
        
    }



}
onchange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
onsubmit = (e) =>{
    e.preventDefault();
    axios.post('/student',{...this.state})

    .then(res => console.log(res.data))
    .catch(err => console.log("err"));

    axios.post('/parent',{name:this.state.parentName,email:this.state.parentEmail,password:this.state.password,kids:[{name:this.state.name,lastName:this.state.lastname,email:this.state.email,mobile:this.state.mobile,class:this.state.class}]})
    .then(res => console.log(res.data))
    .catch(err => console.log("err"));
}
    render(){
        console.log(this.state)
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
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Last Name
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="lastname" placeholder="enter last name"
                                                           className="form-control input-height" value={this.state.lastname} onChange={this.onchange}/>
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
                                                <label className="control-label col-md-3">Email
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-envelope text-info"></i></div>
                                                        </div>
                                                        <input type="email" className="form-control" id="nombre"
                                                               name="email" placeholder="ejemplo@gmail.com" value={this.state.email} onChange={this.onchange} required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Registration Date
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div>
                                                        <input type="calendar" className="form-control" id="nombre"
                                                               name="admissiondate" placeholder="dd/mm/yy" value={this.state.admissiondate} onChange={this.onchange} required/>
                                                    </div>
                                                    <input type="hidden" id="dtp_input2" value=""/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Class
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control input-height" name="departement" value={this.state.departement} onChange={this.onchange}>
                                                        <option value="">Select...</option>
                                                        <option value="computer">Computer</option>
                                                        <option value="science">Science</option>
                                                        <option value="humanities">Humanities</option>
                                                        <option value="Diploma">Diploma</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Gender
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <select className="form-control input-height" name="gender">
                                                        <option value="">Select...</option>
                                                        <option value="Category 1">Male</option>
                                                        <option value="Category 2">Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Mobile No.
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="mobile" type="text" placeholder="mobile number"
                                                           className="form-control input-height"  value={this.state.mobile} onChange={this.onchange}/></div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Parents Name
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="parentName"
                                                           placeholder="enter parents name"
                                                           className="form-control input-height" onChange={this.onchange}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Parents Mobile No.
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="parnetNumber" type="text" placeholder="parents mobile number"
                                                           className="form-control input-height" onChange={this.onchange}/>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Parents Email 
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="parentEmail" type="text" placeholder="parents email"
                                                           className="form-control input-height" onChange={this.onchange}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Date Of Birth
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div>
                                                        <input type="calendar" className="form-control" id="nombre"
                                                               name="dateofbirth" placeholder="dd/mm/yy" value={this.state.dateofbirth} onChange={this.onchange}  required/>
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
                                                              className="form-control-textarea" rows="5" value={this.state.address} onChange={this.onchange} ></textarea>
                                                </div>
                                            </div>
                                            
                                            <div className="form-actions">
                                                <div className="row">
                                                    <div className="offset-md-3 col-md-9">
                                                        <button type="submit" className="btn btn-info m-r-20" onClick={this.onsubmit}>
                                                       <Link to='/profile/students'>Submit</Link> </button>
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
export default AddStudent;