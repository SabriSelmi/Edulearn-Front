import React,{Component} from "react";
import folder from './images/addfolder.png';
import {NavLink} from "react-router-dom";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { Document, Page } from 'react-pdf';


class StudentProffItem extends React.Component {
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
                                                    <td>{item.lastname}</td>
                                                   <td> <input type="number" name="note" /></td>
           
 </tr>
      );
    }
  }
  
  export default StudentProffItem 