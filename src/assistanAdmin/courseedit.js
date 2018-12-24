import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class EditCourse extends Component {
    constructor(props)
    {
        super(props)
        this.state={
         name:"",
         date:"",
         duration:""
        }
    }

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    componentDidMount=()=>
    {
        this.setState({
            ...this.props.courses.filter(el=>el._id===this.props._id)[0]
        })
    }
    // editContact=()=>
    // {
    //   axios.put(`/edit-contact/${this.state._id}`,{
    //     name:this.state.name,
    //     phone:this.state.phone,
    //       email:this.state.email
    //   })  
    //   .then(()=>this.props.editContactReducer({...this.state})) 
    //   .catch((err)=>alert(err))
    // }

    render() { 
        console.log(this.state.courses)
        return ( 
            <div className='add-contact-container'>
            <h1>Edit Contact</h1>
             Name :
             <input  type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
             Phone :
             <input  type='text' name='date' value={this.state.date} onChange={this.handleChange}/>
             Email :
             <input  type='text' name='duration' value={this.state.duration} onChange={this.handleChange}/>
             <Link to='/profile/course'>
             <button onClick={this.editContact}>Edit Contact </button>
             </Link>

            </div> 
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        courses:state.courseReducer
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        editContactReducer:editcourse=>
        {
            dispatch({
                type:'EDIT_CONTACT',
                editcourse
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditCourse);