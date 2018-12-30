import React,{Component} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import Kids from "./kids";
import {Logout} from '../image/logout.png';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import './style.css'
const  kidsTab=[{name:"sabri"}, {name:"selmi"}]
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
    Parent:{},
                professorName:"",
                professorLastName:"",
                date:"",
                heure:"",
                kidName:"",
                kidLastName:"",
                name:"",
                lastName:"",
                phone:"",
                email:"",
                adress:"",
                birthday:"",
                password:"",
                modaldelete: false,
          
           
         }
    }
   


addMeeting=()=>{
    axios.post("/meeting", { professorName:this.state.professorName,
    professorLastName:this.state.professorLastName,
    date:this.state.date,
    heure:this.state.heure,
    kidName:this.state.kidName,
    kidLastName:this.state.kidLastName}).then(alert("meeting added"))
}
toggledelete = () => {
    this.setState({
        modaldelete: !this.state.modaldelete
    });
  }
onchange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}


onsubmit = () =>{
    axios.put(`/parent/${this.props.user._id}`,{

        firstName:this.state.firstName,
        lastName:this.state.lastName,
        phone:this.state.phone,
        email:this.state.email,
        adress:this.state.adress,
        birthday:this.state.birthday,
        password:this.state.password
       


        }).then(alert("profile edited"))
    }

render() { 
       
        return ( 
         
    
        <div style={{marginTop:"9%"}}>
        <div class="container bootstrap snippet">
        <div class="row">
              <div class="col-sm-10"><h1>Welcome {this.props.user.name}</h1></div>
            <div class="col-sm-2" onClick={this.props.Click}><NavLink to="/profile" class="pull-right"><img title="profile image" class="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100"/></NavLink></div>
       <span class="col-sm-11"></span>
       <h5 class="col-sm-1">Logout</h5>
        </div>
        <div class="row">
              <div class="col-sm-3">
                  
    
          <div class="text-center">
            <img src="https://errin.eu/sites/default/files/default-avatar.png" alt="avatar"/>
           
          </div><hr/><br/>
    
         
              
              
              <ul class="list-group">
                <li class="list-group-item text-muted">Activity <i class="fa fa-dashboard fa-1x"></i></li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>First name:</strong></span> {this.props.user.name}</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Last Name:</strong></span> {this.props.user.lastName}</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Phone:</strong></span> {this.props.user.phone}</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Email:</strong></span>{this.props.user.email}</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Adress:</strong></span> {this.props.user.adress}</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Date of birth:</strong></span> {this.props.user.birthday}</li>
              </ul> 
                   
              <div class="panel panel-default">
                <div class="panel-heading">Social Media</div>
                <div class="panel-body">
                    <i class="fa fa-facebook fa-2x"></i> <i class="fa fa-github fa-2x"></i> <i class="fa fa-twitter fa-2x"></i> <i class="fa fa-pinterest fa-2x"></i> <i class="fa fa-google-plus fa-2x"></i>
                </div>
              </div>
              
            </div>
            <div class="col-sm-9">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
                    <li><a data-toggle="tab" href="#messages">Edit profile</a></li>
                    
                    <li><a data-toggle="tab" href="#meeting">Ask for meeting</a></li>
                  </ul>
    
                  
              <div class="tab-content">
              
              <div class="tab-pane" id="meeting">
              <div class="" >
                          <div class="form-group" >
                              
                              
                                  <label for="first_name"><h5 >Professor First Name</h5></label>
                                  <input type="text" class="form-control" name="professorName" id="first_name" placeholder="first name" title="enter your first name if any." onChange={this.onchange}/>
                             
                          </div>
                          <div class="form-group" >
                              
                              
                                <label for="last_name"><h5 >Professor Last Name</h5></label>
                                  <input type="text" class="form-control" name="professorLastName" id="last_name" placeholder="last name" title="enter your last name if any." onChange={this.onchange}/>
                              
                          </div>
              
                          <div class="form-group">
                              
                              
                                  <label for="phone"><h5 >Date of meeting</h5></label>
                                  <input type="text" class="form-control" name="date" id="phone" placeholder="dd/mm/yyyy" title="enter your phone number if any." onChange={this.onchange}/>
                             
                          </div>
              
                          <div class="form-group" >
                              
                                 <label for="mobile"><h5 >Heure</h5></label>
                                  <input type="text" class="form-control" name="heure" id="mobile" placeholder="hh:mm" title="enter your mobile number if any." onChange={this.onchange}/>
                             
                          </div>
                          <div class="form-group" >
                              
                              <label for="mobile"><h5 >Kid's name</h5></label>
                               <input type="text" class="form-control" name="kidName" id="mobile" placeholder="Kid's name" title="enter your mobile number if any." onChange={this.onchange}/>
                          
                       </div>
                      
                       <div class="form-group" >
                              
                              <label for="mobile"><h5 >Kid's Last name</h5></label>
                               <input type="text" class="form-control" name="kidLastName" id="mobile" placeholder="Kid's Last name" title="enter your mobile number if any." onChange={this.onchange}/>
                          
                       </div>
                       <br/> 
                       <button class="btn btn-lg btn-success" type="submit" onClick={this.addMeeting}><i class="glyphicon glyphicon-ok-sign"  ></i> Save</button>
                       				
                          </div>
              </div>
                <div class="tab-pane active" id="home">
                    <hr/>
                    <h1>Your Kids</h1>
                    <div id="rs-team" className="rs-team sec-color sec-spacer">
                <div className="container">
               
                    <div className="row rs-vertical-middle">
                    
                    { this.props.user.kids.map((el,i)=><Kids key={i} el={el}/>)}
                      </div>
                      </div>
                  </div>
                  <hr/>
                  
                 </div>
                 <div class="tab-pane" id="messages">
                   
                   
                   
                   <hr/>
                      <div class="form" >
                          <div class="form-group" >
                              
                              
                                  <label for="firstName"><h5 >First name</h5></label>
                                  <input type="text" class="form-control" name="name" id="first_name" placeholder="first name" title="enter your first name if any." onChange={this.onchange}/>
                             
                          </div>
                          <div class="form-group" >
                              
                              
                                <label for="last_name"><h5 >Last name</h5></label>
                                  <input type="text" class="form-control" name="lastNname" id="lastNname" placeholder="last name" title="enter your last name if any." onChange={this.onchange}/>
                              
                          </div>
              
                          <div class="form-group">
                              
                              
                                  <label for="phone"><h5 >Phone</h5></label>
                                  <input type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." onChange={this.onchange}/>
                             
                          </div>
              
    
                          <div class="form-group" >
                              
                              
                                  <label for="email"><h5 >Email</h5></label>
                                  <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." onChange={this.onchange}/>
                              
                          </div>
                          <div class="form-group" >
                              
                              
                                  <label for="text"><h5 >Location</h5></label>
                                  <input type="text" class="form-control" name="adress" id="location" placeholder="somewhere" title="enter a location" onChange={this.onchange}/>
                            
                          </div>
                          <div class="form-group" >
                              
                              
                                  <label for="password"><h5 >Password</h5></label>
                                  <input type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password." onChange={this.onchange}/>
                             
                          </div>
                          <div class="form-group" >
                              
                              
                                  <label for="password"><h5 >  <div class="form-group" >
                              
                              
                                  <label for="password"><h5 >Birthday</h5></label>
                                  <input type="date" class="form-control" name="birthday" id="password" placeholder="birth date" title="enter your birth day." onChange={this.onchange}/>
                             
                          </div></h5></label>
                             
                          </div>
                          <div class="form-group" >
                               <div class="col-xs-12">
                                    <br/>
                                      <button class="btn btn-lg btn-success" type="submit" onClick={this.onsubmit}><i class="glyphicon glyphicon-ok-sign"  ></i> Save</button>
                                       <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button>
                                </div>
                          </div>
                      
                   </div>
                 </div>
                
                 </div>
                 </div>
                 </div>
                   
                  </div>
                  <Modal isOpen={this.state.modaldelete} toggledelete={this.toggledelete} size="sm" frame position="top" style={{marginTop:"250px"}}>
             <ModalBody>
             You request has been saved and waiting for admin validation ? 
             </ModalBody>
             <ModalFooter>
               <Button color="secondary" onClick={this.toggledelete}>Close</Button>
             </ModalFooter>
           </Modal>								
              </div>

           
        );
    }
}
 
export default Parent;