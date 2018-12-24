import React, { Component } from 'react';
/*import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Validator from './validator';*/
import {NavLink} from "react-router-dom";


const formValid = ({formErrors, ...rest}) => {
    let valid = true;
    Object.values(formErrors).forEach(val =>{
        val.length>0 &&(valid=false);
	});
	
	 // validate the form was filled out
	 Object.values(rest).forEach(val => {
		val === null && (valid = false);
	  });
	
    return valid;
};

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:null,
            lname:null,
            email:null,
            message:null,
            formErrors:{
                fname:"",
                lname:"",
                email:"",
                message:""
            }
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if (formValid(this.state.formErrors)){
            console.log(`${this.state.firstName}`)
        }
        else {
            console.error("invalid input data")
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        let formErrors = {...this.state.formErrors};
        switch(name){
            case 'fname':
            formErrors.fname = value.length <3 ?'minimun 3 characters required'
            :"";
            break;
            case 'lname':  
             formErrors.lname = value.length <3 ?'minimun 3 characters required'
            :"";
            break;
			case 'email':  
			formErrors.email = emailRegex.test(value)
			? ""
			: "invalid email address"
           ;
           break;
           case 'message':  
           formErrors.message = value.length ===0 ?'minimun 3 characters required'
          :"";
          break;
          default:
          break;
        }
            this.setState({formErrors,[name]:value},()=>console.log(this.state))
    }

  render() {
      const {formErrors}=this.state;
    return (<div>
        		<div className="rs-breadcrumbs bg7 breadcrumbs-overlay">
		    <div className="breadcrumbs-inner">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-12 text-center">
		                    <h1 className="page-title">Contact</h1>
		                    <ul>
		                        <li>
		                            <NavLink className="active" to="/">Home</NavLink>
		                        </li>
		                        <li>Contact</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        <div className="row ml-5 mt-3">
<iframe title="sahloul" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.574419351124!2d10.609546439392908!3d35.855629850459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8af5620fdf25%3A0x331e64ed11f24344!2sSahloul%2C+Sousse!5e0!3m2!1sfr!2stn!4v1544644169249"   style={{width:"1200px",height:"400px",frameborder:"10px",border:"10px",marginLeft:"10px"}}></iframe>
        </div>
		<div className="contact-page-section sec-spacer">
        	<div className="container">
        		<div className="row contact-address-section">
    				<div className="col-md-4 pl-0">
    					<div className="contact-info contact-address">
    						<i className="fa fa-map-marker"></i>
    						<h4>Address</h4>
    						<p>503  Old Buffalo Street</p>
    						<p>Northwest #205, New York-3087</p>
    					</div>
    				</div>
    				<div className="col-md-4">
    					<div className="contact-info contact-phone">
    						<i className="fa fa-phone"></i>
    						<h4>Phone Number</h4>
    						<NavLink to="tel:+3453-909-6565">+3453-909-6565</NavLink>
    						<NavLink to="tel:+2390-875-2235">+2390-875-2235</NavLink>
    					</div>
    				</div>
    				<div className="col-md-4 pr-0">
    					<div className="contact-info contact-email">
    						<i className="fa fa-envelope"></i>
    						<h4>Email Address</h4>
    						<NavLink to="mailto:infoname@gmail.com"><p>infoname@gmail.com</p></NavLink>
    						<NavLink to="#"><p>www.yourname.com</p></NavLink>
        				</div>
        			</div>
        		</div>

        		<div className="contact-comment-section">
        			<h3>Leave Comment</h3>
                    <div id="form-messages"></div>
					<form id="contact-form" onSubmit={this.handleSubmit} noValidate>
						<fieldset>
							<div className="row">                                      
							<div className="col-md-6 col-sm-12">
									<div className="form-group">
										<label>First Name*</label>
										<input style={formErrors.fname.length>0 ?{border:"1px solid orangered"}:null} name="fname" id="fname" className="form-control" placeholder="First Name" type="text" noValidate onChange={this.handleChange}/>
                                        {formErrors.fname.length>0 &&(<span className="errorMessage">{formErrors.fname}</span>)}
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="form-group">
										<label>Last Name*</label>
										<input style={formErrors.lname.length>0 ?{border:"1px solid orangered"}:null}  name="lname" id="lname" className="form-control" placeholder="Last Name" type="text" noValidate onChange={this.handleChange}/>
                                        {formErrors.lname.length>0 &&(<span className="errorMessage">{formErrors.lname}</span>)}
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 col-sm-12">
									<div className="form-group">
                                    <label>
                    					Email*</label>
                    <input style={formErrors.email.length>0 ?{border:"1px solid orangered"}:null}  className="form-control" placeholder='email@email.com' name='email' type="email" noValidate onChange={this.handleChange}/>
					{formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
									</div>
								</div>
								<div className="col-md-6 col-sm-12">
									<div className="form-group">
										<label>Subject *</label>
										<input name="subject" id="subject" className="form-control" placeholder="Subject" type="text"/>
									</div>
								</div>
							</div>
							<div className="row"> 
								<div className="col-md-12 col-sm-12">    
									<div className="form-group">
										<label>Message *</label>
										<textarea cols="40" rows="10" id="message" name="message" placeholder="Enter your message here..." className="textarea form-control"></textarea>
                                        {formErrors.message.length>0&&(<span className="errorMessage">{formErrors.message}</span>)}
									</div>
								</div>
							</div>							        
							<div className="form-group mb-0">
								<input className="btn-send" type="submit" value="Submit Now"/>
							</div>
							   
						</fieldset>
					</form>						
        		</div>
        	</div>
        </div>


        </div>
    );
  }
}

export default Contact;
