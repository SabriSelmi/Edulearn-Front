import React,{Component} from "react";
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import axios from "axios";

class EditCourse extends Component{
constructor(props){
    super(props)
    this.state={
        
    }



}
onchange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
componentDidMount() {
    axios.get('/course/'+this.props.id).then(res=>this.setState({
        ...res.data
    }))
    
    
    }

onsubmit = () =>{
    axios.put('/course/'+this.props.id,{
        id:this.props.id,
        name:this.state.name,
        date:this.state.date,
        duration:this.state.duration,
        seats:this.state.seats,
        value:this.state.value
       


        })
    .then(res => console.log(res.data))
    .catch(err => console.log("err"));
}
    render(){
        return(
            <div className="page-content-wrapper col-lg-9 col-md-9 col-sm-9 m-3">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">EditStudent</div>
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
                                                <label className="control-label col-md-3">Name
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input type="text" name="name" placeholder="enter first name"
                                                           className="form-control input-height" onChange={this.onchange}  value={this.state.name} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3"> Date
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="input-group mb-2">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text"><i
                                                                className="fa fa-calendar text-info"></i></div>
                                                        </div>
                                                        <input type="calendar" className="form-control" id="nombre"
                                                               name="date" placeholder="dd/mm/yy" value={this.state.date} onChange={this.onchange} required/>
                                                    </div>
                                                    <input type="hidden" id="dtp_input2" value=""/>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="control-label col-md-3">duration
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="duration" type="text" placeholder="mobile number"
                                                           className="form-control input-height"  value={this.state.duration} onChange={this.onchange}/></div>
                                            </div>
                                        
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Details
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="details" type="text" placeholder="parents mobile number"
                                                           className="form-control input-height"/>
                                                </div>
                                            </div>
                                        
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Seats
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <input name="seats" type="text" placeholder="mobile number"
                                                           className="form-control input-height"  value={this.state.seats} onChange={this.onchange}/></div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label col-md-3">Value
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-md-8">
                                                    <textarea name="value" placeholder="address"
                                                              className="form-control-textarea" rows="5" value={this.state.value} onChange={this.onchange} ></textarea>
                                                </div>
                                            </div>
                                            <div className="form-actions">
                                                <div className="row">
                                                    <div className="offset-md-3 col-md-9">
                                                       <Link type="button" value='Submit'   className="btn btn-info m-r-20" onClick={this.onsubmit}   to='/profile/course' >Submit</Link>
                                                    <Link  type="button" className="btn btn-default" to='/profile/course'>Cancel</Link>
                                                        
                                                    </div>
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
        )
    }
}
export default EditCourse;