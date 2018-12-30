import React from "react";
import trach from './image/trach.png';
import edit from './image/edit.png';
import Popup from "reactjs-popup";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { render } from 'react-dom';

class Messageitem extends React.PureComponent {
    constructor(props){
		super(props)
			this.state={
                        modaldelete: false,
                    
            }
        }
        onDeleteClick = () => {
          // No bind needed since we can compose the relevant data for this item here
          this.props.onClick(this.props.student._id);
        };

        toggledelete = () => {
          this.setState({
              modaldelete: !this.state.modaldelete
          });
        }
      

      
//   renderStudent = student => {
//     return <Student key={student._id} student={student} onClick={this.deleteStudent} onchange={this.onchange} />;
//   }

  render() {
    console.log(`${this.props.student.fname} just rendered`);
    return (
      
          	<tr key={this.props.student._id}>
														<td>{this.props.student.fname}</td>
														<td>{this.props.student.lname}</td>
														<td>{this.props.student.email}</td>
														<td>{this.props.student.message}</td>
														<td>{this.props.student.subject}</td>
        
                                
														<td>
														<a><img  src={trach} style={{height:"15px"}} alt="delete" onClick={this.toggledelete}  /></a></td>
                                               
       
  
       <Modal isOpen={this.state.modaldelete} toggledelete={this.toggledelete} size="sm" frame position="top" style={{marginTop:"250pxa"}}>
         <ModalBody>
         Are you sure you want to delete this user event {this.props.student.name} ? 
         </ModalBody>
          <ModalFooter>
           <Button color="secondary" onClick={this.toggledelete}>Close</Button>
           <Button color="danger" onClick={this.toggledelete} onClick={this.onDeleteClick}>Delete</Button>
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

export default Messageitem;
