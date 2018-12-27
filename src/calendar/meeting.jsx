import React,{Component} from 'react';
import axios from "axios";
import MeetingsElement from "./meetingsElement";


class Meetings extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            meetingTab:[{
                professorName : "", 
                professorLastName : "", 
                date : "", 
                heure : "", 
                kidName : "", 
                kidLastName : ""
            }]
         }
    }
    componentDidMount(){
        axios.get("/meetings").then(res=>this.setState({
            meetingTab:res.data
        }))
    }
    deleteOne=id=>{
        axios.delete("/meetings/"+id)
        axios.get("/meetings").then(res=>this.setState({
            meetingTab:res.data
        }))
    }
    render() { 
        return ( 
        <div className="row">
        {this.state.meetingTab.map((el,i)=><MeetingsElement key={i} el={el} click={this.deleteOne}/>)}
        </div> );
    }
}
 
export default Meetings;