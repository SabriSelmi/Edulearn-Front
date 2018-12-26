import React,{Component} from "react";
import StudentProffItem from './professorstudentsitem';
import axios from 'axios';
class ProfessorgradesB extends React.Component {
  constructor(props){
    super(props)
    this.state={
students:[],
toogleupdate:false
    }
}


  componentDidMount(){
        axios.get(`/user/${this.props.id}/ClassB`).then(res=>
            this.setState({
              students:res.data
            }))       
        console.log(this.state.students)
        }

    render() {
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
                                   
                                                               <th>Name</th>
                                                               <th>Lastname</th>
                                                               <th>Email</th>
                                                               <th>Class</th>
                                                               <th>Note</th>
                                 </tr>
                               </thead>
                               <tbody>
                                                       {
                                                              this.state.students.map((el,index)=>
                                                             <StudentProffItem key = {index} item={el} />
                                                            )}
                                 
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
  
  export default ProfessorgradesB