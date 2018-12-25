import React, { Component } from 'react';
import Coursefilter from  './courslist';
import ScienceList from  './science';
import Business from  './business';
import Humanitiescourse from'./humanities';
import Diplomacourse from'./diplomalist';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
  } from "react-router-dom";

 
const menuItems = [
	"",
	'SCIENCE',
	'BUSINESS',
	'HUMANITIES',
	'DIPLOMA'
 ];
class Course extends Component {
	constructor() {
		super();
		this.state = {
			active: '',
		};
	}	



	_handleClick(menuItem) { 
		this.setState({ active: menuItem });
	  }
	 
  render() {
	const activeStyle = { 
		fontSize: "15px",
		fontWeight: "700",
		color: '#ff3333' };
		const Style = { 
			fontSize: "15px",
			fontWeight: "700",
			color: 'hsl(0, 0%, 31%)' };

    return (
      <div className="home5">
<div className="rs-breadcrumbs bg7 breadcrumbs-overlay">
		    <div className="breadcrumbs-inner">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-12 text-center">
		                    <h1 className="page-title">OUR COURSES</h1>
		                    <ul>
		                        <li>
		                            <a className="active" href="index.html">Home</a>
		                        </li>
		                        <li>Our Courses</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		<div id="rs-courses-3" className="rs-courses-3 sec-spacer">
			<div className="container">
				<div className="abt-title">
				    <h2>OUR COURSES</h2>
				</div>
                <div className="gridFilter">
				<button id="button" >
				<Link
			 style={this.state.active === "" ? activeStyle : Style} 
             onClick={this._handleClick.bind(this, "")}
            to={`/course`}> 
             ALL			 
            </Link>
			</button>
				{menuItems.map(menuItem => 
				<button id="button" className="" >
			
            <Link
			 style={this.state.active === menuItem ? activeStyle : Style} 
             onClick={this._handleClick.bind(this, menuItem)}
            to={`/course/${menuItem}`}> 
              {menuItem}
            </Link>
			</button>
		 )}
<Route  exact path="/course" component={Coursefilter} />
			<Route  exact path="/course/ALL" component={Coursefilter} />
			
			<Route exact path="/course/SCIENCE" render={() => (
  ((this.props.isAdmin===false))? (
    <Redirect to="/"/>
  ) : (
<Route path="/course/SCIENCE" component={ScienceList} />
  )
)}/>
		
			<Route path="/course/BUSINESS" component={Business} />
			
			<Route path="/course/HUMANITIES" component={Humanitiescourse} />
					
			<Route path="/course/DIPLOMA" component={Diplomacourse} />
			  
                </div>
				</div>

      </div>

	  </div>
    );
  }
}

export default Course;

