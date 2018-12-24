import React, { Component } from 'react';
import DiplomaItem from './humanitiesitem';
const axios = require('axios');

class Diplomacourse extends Component{
    constructor(props){
        super(props)
        this.state={
          nom:'',
          date:'',
          duration:'',
          details:'',
          seats:'',
          value:'',
          sciencecourses :
           [],
          currentPage: 1,
          todosPerPage: 6,
          disabled:true,
    }
    
      
    }
    
    handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
        const currentState = this.state.disabled;
        this.setState({ disabled:!currentState }); 
      }
    
      handleClicknext = (event) => {
        this.setState({
          currentPage: this.state.currentPage+1
        });
    
      }
      componentDidMount =()=>{
        axios.get('/Diplomacourse').then(res=>
          this.setState({
            sciencecourses:res.data
          }))    
        
      }
      
    
      handleClickprec = (event) => {
        if(this.state.currentPage===2){
            const currentState = this.state.disabled;
            this.setState({ disabled:!currentState }); 
        }
        else if(this.state.currentPage!=1){
            this.setState({
                currentPage: this.state.currentPage-1,
              });
        }
    
      }
      render() {
        const { sciencecourses, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = sciencecourses.slice(indexOfFirstTodo, indexOfLastTodo);
        console.log(currentTodos)
        const pageNumbers = [];
        let length =Math.ceil(sciencecourses.length / todosPerPage)
        for (let i = 1; i <= length; i++) {
          pageNumbers.push(i);
        }
        console.log("aa"+pageNumbers[length-1])
    
        const renderPageNumbers = pageNumbers.map(number => {
          return (
    <li class="page-item"><a   key={number}
              id={number}
              onClick={this.handleClick} class="page-link active" style={{border:"1px solid #dee2e6" , fontSize:"18px" ,fontWeight:"600" }}>{number}</a></li>
          );
        });
        return (
     <div>
                            <div class="row grid" style={{marginTop:"20px"}}>
                 {currentTodos.map((el,i)=><DiplomaItem course ={el}  key={i}/>)}
    
       </div>
       <nav aria-label="Page navigation example">
                        <ul class="pagination">
                        <li className={this.state.disabled?"page-item disabled":"page-item"} style={{border:"1px solid #dee2e6"}}  ><a class="page-link fa fa-angle-left" tabindex="-1" onClick={this.handleClickprec} ></a></li>
                   {renderPageNumbers}
                   <li className={this.state.disabled?"page-item disabled":"page-item"} style={{border:"1px solid #dee2e6"}}><a class="page-link fa fa-angle-right" onClick={this.handleClicknext}></a></li>
                </ul>
       </nav>
    
       
          </div>
              
        );
      }
    }
export default Diplomacourse;
