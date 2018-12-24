import React from "react";
import trach from './image/trach.png';
import edit from './image/edit.png';
import Popup from "reactjs-popup";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { render } from 'react-dom';

// Note that the console.log below isn't called
// when delete is clicked on a user.
// That's because pureComponent's shallow
// comparison works properly here because
// the parent component isn't passing down
// an arrow function (which would cause this
// component to see a new function on each render)
class Student extends React.PureComponent {
    constructor(props){
		super(props)
			this.state={
						modaledit: false,
                        modaldelete: false,
                        name:"",
            }
        }
  onDeleteClick = () => {
    // No bind needed since we can compose the relevant data for this item here
    this.props.onClick(this.props.student._id);
  };

  onUpdateClick = () => {
    // No bind needed since we can compose the relevant data for this item here
    this.props.onClick(this.props.student._id);
  };

  
  onchange= (e) => {
   this.setState({
       name:e.target.value
   })
  };
		
  toggleedit = () => {
    this.setState({
      modaledit: !this.state.modaledit
    });
  }
  toggledelete = () => {
    this.setState({
        modaldelete: !this.state.modaldelete
    });
  }

      
//   renderStudent = student => {
//     return <Student key={student._id} student={student} onClick={this.deleteStudent} onchange={this.onchange} />;
//   }

  render() {
    console.log(`${this.props.student._id} just rendered`);
    return (
      
          	<tr key={this.props.student._id}>
														<td>{this.props.student.name}</td>
														<td>{this.props.student.departement}</td>
														<td>{this.props.student.mobile}</td>
														<td>{this.props.student.email}</td>
														<td>{this.props.student.admissiondate}</td>
														<td>
														<a><img  src={trach} style={{height:"15px"}} alt="delete" onClick={this.toggledelete}  /></a>
														 <Link Redirect exact  to={`/profile/editStudent/${this.props.student._id}`}  ><img  src={edit} style={{height:"15px",marginLeft:"-35px"}} alt="edit" onClick={this.onclickgetstudent}  onClick={this.toggleedit}    /></Link></td> 
																
													
													
		 
          {/* <Modal  isOpen={this.state.modaledit} toggle={this.toggleedit}  size="lg" full-height position="center"  style={{width:"900px"}} >
         <ModalBody  style={{width:"800px"}} >
         <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3 ml-5"  style={{width:"800px"}}>
               <div className="page-content">
                   <div className="page-bar">
                       <div className="page-title-breadcrumb">
                           <div className=" pull-left">
                               <div className="page-title">Edit Student</div>
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
                                                          className="form-control input-height" value={this.props.student.name}    onChange={this.onchange}  /><p></p>
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
         </ModalBody>
         <ModalFooter>
           <Button type="submit" className="btn btn-info m-r-20">Submit</Button>
           <Button type="button" className="btn btn-default" onClick={this.toggleedit} >Cancel</Button>
         </ModalFooter>
       </Modal> */}
       <Modal isOpen={this.state.modaldelete} toggledelete={this.toggledelete} size="sm" frame position="top" style={{marginTop:"250pxa"}}>
         <ModalBody>
         Are you sure you want to delete this user account {this.props.student.name} ? 
         </ModalBody>
         <ModalFooter>
           <Button color="secondary" onClick={this.toggledelete}>Close</Button>
           <Button color="danger" onClick={this.onDeleteClick} Redirect to='/profile/students'  >Delete</Button>
         </ModalFooter>
       </Modal>
       </tr>
    );
  }
}

Student.propTypes = {
  student: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Student;
