import React,{Component} from "react";
import axios from "axios";
import ClassProffItem from './classproffitem';
import folder from './images/addfolder.png';
import user from './images/users.png';
import Professorgrades from './professorGrades';
import {NavLink,Route} from 'react-router-dom';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class Professorclasses extends React.Component {
constructor(props){
    super(props)
    this.state={
classe1:[],
classe2:[],
classe3:[],
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
        axios.get(`/user/${this.props.id}/departement1`).then(res=>
            this.setState({
              classe1:res.data
            }))     
            axios.get(`/user/${this.props.id}/departement2`).then(res=>
              this.setState({
                classe2:res.data
              }))     
              axios.get(`/user/${this.props.id}/departement3`).then(res=>
                this.setState({
                  classe3:res.data
                }))       
        console.log("aa"+this.state.classes)
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
                                                     
                            <th>Action</th>
													</tr>
												</thead>
												<tbody>  
                                        <tr>
  <td>{this.state.classe1}</td>
  <td>
  <a><img  src={folder} style={{height:"35px"}} alt="delete"  onClick={this.toggledelete}    /></a>
  <NavLink    Redirect to={`/profile/grades`}  className="ml-2"><img  src={user} style={{height:"30px"}} alt="grades"  /></NavLink>
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
  <td>{this.state.classe2}</td>
  <td>
  <a><img  src={folder} style={{height:"35px"}} alt="delete"  onClick={this.toggledelete}    /></a>
  <NavLink    Redirect to='/profile/grades'  className="ml-2"><img  src={user} style={{height:"30px"}} alt="delete"  /></NavLink>
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
  <td>{this.state.classe3}</td>
  <td>
  <a><img  src={folder} style={{height:"35px"}} alt="delete"  onClick={this.toggledelete}    /></a>
  <NavLink    Redirect to='/profile/grades'  className="ml-2"><img  src={user} style={{height:"30px"}} alt="delete"  /></NavLink>
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
                  <Route exact path={`/profile/${this.state.classe1}/grades` } render ={(props)=> <Professorgrades classe1={this.state.classe1}/>}/>
                 </div>
        </div>
      );
    }
  }
  
  export default Professorclasses 