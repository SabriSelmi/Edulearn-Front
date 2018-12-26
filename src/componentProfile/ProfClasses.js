import React,{Component} from "react";
import axios from "axios";
import ClassProffItem from './classproffitem';
import folder from './images/addfolder.png';
import user from './images/users.png';
import {NavLink} from "react-router-dom";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class Professorclasses extends React.Component {
constructor(props){
    super(props)
    this.state={
classes:[],
toogleupdate:false,
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


  componentDidMount(){
        axios.get(`/user/${this.props.id}/classes`).then(res=>
            this.setState({
              classes:res.data
            }))       
        console.log(this.state.classes)
        }
    render() {
        console.log(this.props.id)
        console.log(this.state)
      return (
        <div>
 <div className="page-content-wrapper col-lg-11 col-md-9 col-sm-9 m-3 ml-5">
            <div className="row mb-5 mt-5">
						<div className="col-md-12 col-sm-10 mb-5">
							<div className="card  card-box">
								<div className="card-head">
									<header>Course List</header>
								</div>
								<div className="card-body ">
									<div className="table-wrap table-striped">
										<div className="table-responsive">
											<table className="table display product-overview mb-30" id="support_table">
												<thead>
													<tr>
														<th>Class</th>
                                                        <th>Subject</th>
                                                        <th>Action</th>
													</tr>
												</thead>
												<tbody>
                                                <tr>
                                                    <td>Class A</td>
                                                    <td>Science</td>
                                                    <td>
                                                    <a><img  src={folder} style={{height:"35px"}} alt="delete"  onClick={this.toggledelete}    /></a>
                                                    <NavLink className="ml-2" to="/profile/grades"><img  src={user} style={{height:"30px"}} alt="delete"  onClick={this.toggledelete}    /></NavLink>
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
 <tr>
                                                    <td>Class B</td>
                                                    <td>Science</td>
                                                    <td>
                                                    <a><img  src={folder} style={{height:"35px"}} alt="delete"  onClick={this.toggledelete}    /></a>
                                                    <NavLink className="ml-2" to="/profile/gradesB"><img  src={user} style={{height:"30px"}} alt="delete"  onClick={this.toggledelete}    /></NavLink>
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
 <tr>
                                                    <td>Class C</td>
                                                    <td>Science</td>
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
												</tbody>
											</table>
										</div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
           
                 </div>
        </div>
      );
    }
  }
  
  export default Professorclasses 