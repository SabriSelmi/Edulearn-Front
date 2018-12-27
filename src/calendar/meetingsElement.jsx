import React,{Component} from "react";
import axios from "axios";


class MeetingsElement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onDeleteClick = () => {
        
        this.props.click(this.props.el._id);
      };
    render() { 
        return (
        <div className="col-sm-3 p-3 bg-primary m-3" style={{border:"1px solid black", borderRadius:"5px", color:"white"}}>
        <div className="row"><span className="col-sm-8"></span> <div className="col-sm-4 btn btn-primary" onClick={this.onDeleteClick} ><img style={{width:"20px",height:"20px"}} src="https://cdn2.iconfinder.com/data/icons/ios-7-tab-bar-icons/500/trash-128.png" alt="delete"/></div></div>
        <div style={{color:"white"}}><strong style={{color:"black"}}>Professor's Name:</strong> {this.props.el.professorName}</div>
        <div style={{color:"white"}}><strong style={{color:"black"}}>Professor's Last Name:</strong> {this.props.el.professorLastName}</div>
        <div style={{color:"white"}}><strong style={{color:"black"}}>Date:</strong> {this.props.el.date}</div>
        <div style={{color:"white"}}><strong style={{color:"black"}}>Heure:</strong> {this.props.el.heure}</div>
        <div style={{color:"white"}}><strong style={{color:"black"}}>Kid's Name:</strong> {this.props.el.kidName}</div>
        <div style={{color:"white"}}><strong style={{color:"black"}}>Kid's LastName:</strong> {this.props.el.kidLastName}</div>
        </div> );
    }
}
 
export default MeetingsElement;