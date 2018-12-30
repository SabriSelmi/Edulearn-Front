import React from "react";
import trach from './image/trach.png';
import edit from './image/edit.png';
import Popup from "reactjs-popup";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { render } from 'react-dom';

class Eventitem extends React.PureComponent {
    constructor(props){
		super(props)
			this.state={
						modaledit: false,
                        modaldelete: false,
                    
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
       [e.target.name]:e.target.value
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
    
    return (
      
          	<tr key={this.props.student._id}>
														<td>{this.props.student.name}</td>
														<td>{this.props.student.date}</td>
														<td>{this.props.student.time}</td>
														<td>{this.props.student.location}</td>
														<td>{this.props.student.history}</td>
                                                        <td>{this.props.student.like}</td>
                                
														<td>
														<a><img  src={trach} style={{height:"15px"}} alt="delete" onClick={this.toggledelete}  /></a>
                                                  <Link Redirect exact  to={`/profile/editEvent/${this.props.student._id}`}  ><img  src={edit} style={{height:"15px",marginLeft:"-35px"}} alt="edit" onClick={this.onclickgetstudent}  onClick={this.toggleedit}    /></Link>  </td>
       
  
       <Modal isOpen={this.state.modaldelete} toggledelete={this.toggledelete} size="sm" frame position="top" style={{marginTop:"250pxa"}}>
         <ModalBody>
         Are you sure you want to delete this user event {this.props.student.name} ? 
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

Event.propTypes = {
  student: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Eventitem;
