import React,{Component} from "react";
import folder from './images/addfolder.png';
import user from './images/users.png';
import {NavLink} from "react-router-dom";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { Document, Page } from 'react-pdf';


class ClassProffItem extends React.Component {
    constructor(props){
super(props)
this.state={
    modaldelete: false,
}
    }

    
    toggledelete = () => {
        this.setState({
            modaldelete: !this.state.modaldelete,
            numPages: null,
            pageNumber: 1,
        });
      }

       
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

    render() {
        const { pageNumber, numPages } = this.state;
        console.log(this.props)
        const {item}=this.props
      return (
     <tr>
         
                                                    <td>{item.name}</td>
                                                    <td>{item.type}</td>
                                                    <td>
                                                    <a><img  src={folder} style={{height:"35px"}} alt="delete"  onClick={this.toggledelete}    /></a>
                                                    <a className="ml-2"><img  src={user} style={{height:"30px"}} alt="delete"  onClick={this.toggledelete}    /></a>
                                                    </td>


                                                    <Modal isOpen={this.state.modaldelete} size="sm" frame position="top" style={{marginTop:"250px"}}>
                                                    <ModalBody>
<label htmlFor="file">Load from file:</label>
            {' '}
            <input
              type="file"
              onChange={this.onFileChange}
            />   
  </ModalBody>
   <ModalFooter>
    <NavLink color="secondary" onClick={this.onclick} Redirect to='/profile/classes' onClick={this.toggledelete} >Close</NavLink>
  </ModalFooter> 
</Modal>
           
 </tr>
      );
    }
  }
  
  export default ClassProffItem 