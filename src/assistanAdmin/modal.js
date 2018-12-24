import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';



class Modala extends Component {
    constructor(props){
		super(props)
    this.state={
        modaledit: false,
        modaldelete: false
    }
}

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

render(){
    console.log(this.props)
 return(<div>
            	 <Modal  isOpen={this.state.modaledit} toggleedit={this.props.toggleedit}  size="lg" full-height position="center"  style={{width:"900px"}} >
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
                                                           className="form-control input-height" value={this.props.student.name}  onChange={this.props.onchange} /><p></p>
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
                    <Button type="button" className="btn btn-default" onClick={this.props.toggleedit} >Cancel</Button>
                  </ModalFooter>
                </Modal>
        
        
                <Modal isOpen={this.modaldelete} toggledelete={this.props.toggledelete} size="sm" frame position="top" style={{marginTop:"250pxa"}}>
                  <ModalBody>
                  Are you sure? {this.props.student._id}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.props.toggledelete}>Close</Button>
                    <Button color="danger" onClick={this.props.delete}  >Delete</Button>
                  </ModalFooter>
                </Modal>
                </div>
 )
}
}

export default Modala;