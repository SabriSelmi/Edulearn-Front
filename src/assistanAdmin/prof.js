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
class Proff extends React.PureComponent {
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
    console.log(`${this.props.student} just rendered`);
    return (
      
          	<tr key={this.props.student._id}>
														<td>{this.props.student.name}</td>
														<td>{this.props.student.departement1}</td>
                            <td>{this.props.student.departement2}</td>
                            <td>{this.props.student.departement3}</td>
														<td>{this.props.student.mobile}</td>
														<td>{this.props.student.email}</td>
                            <td>{this.props.student.adresse}</td>
														<td>{this.props.student.admissiondate}</td>
														<td>
														<a><img  src={trach} style={{height:"15px"}} alt="delete" onClick={this.toggledelete}  /></a>
														 <Link Redirect exact  to={`/profile/editProfessor/${this.props.student._id}`}  ><img  src={edit} style={{height:"15px",marginLeft:"-35px"}} alt="edit" onClick={this.onclickgetstudent}  onClick={this.toggleedit}    /></Link></td> 
																
													
                                                         <Modal isOpen={this.state.modaldelete} toggledelete={this.toggledelete} size="sm" frame position="top" style={{marginTop:"250pxa"}}>
             <ModalBody>
             Are you sure you want to delete this user account {this.props.student.name} ? 
             </ModalBody>
             <ModalFooter>
               <Button color="secondary" onClick={this.toggledelete}>Close</Button>
               <Button color="danger" onClick={this.onDeleteClick} Redirect to='/profile/staff'  >Delete</Button>
             </ModalFooter>
           </Modal>								
       </tr>
             
          
    );
  }
}

Proff.propTypes = {
  student: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Proff;
