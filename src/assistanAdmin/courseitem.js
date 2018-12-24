import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios';
import trach from './image/trach.png';
import edit from './image/edit.png';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
class CourseItem extends Component {
    constructor(props){
		super(props)
			this.state={
				
                        modaldelete: false,
                    
            }
        }

        toggledelete = () => {
            this.setState({
                modaldelete: !this.state.modaldelete
            });
          }
    deleteCourse=()=>
    {  const {item} = this.props
    axios.delete(`/course/${item._id}`)
    .then(()=>
        this.props.deleteContactReducer(item._id))
        .catch((err)=>alert(err))
    }
    render() { 
        const {item}=this.props
        return ( 
         
            <tr>
                                                    <td>{item.name}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.duration}</td>
                                                    <td>{item.details}</td>
                                                    <td>{item.seats}</td>
                                                    <td>{item.value}</td>
                                                    <td>
														<a><img  src={trach} style={{height:"15px"}} alt="delete"  onClick={this.toggledelete}  /></a>
														 <Link Redirect exact  to={`/profile/editCourse/${item._id}`}  ><img  src={edit} style={{height:"15px",marginLeft:"-35px"}} alt="edit"     /></Link></td> 
                                                  
                                                  
                                                  
                                                         <Modal isOpen={this.state.modaldelete} toggledelete={this.toggledelete} size="sm" frame position="top" style={{marginTop:"250pxa"}}>
<ModalBody>
Are you sure you want to delete this user event {item.name} ? 
</ModalBody>
 <ModalFooter>
  <Button color="secondary" onClick={this.toggledelete}>Close</Button>
  <Button color="danger" onClick={this.deleteCourse} Redirect to='/profile/course'  >Delete</Button>
</ModalFooter> 
</Modal>
                                                    </tr>


            
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteContactReducer:_id=>
        {
            dispatch({
                type:'REMOVE_COURSE',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(CourseItem);