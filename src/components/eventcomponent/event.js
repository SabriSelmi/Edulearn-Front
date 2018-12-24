import React, { Component } from 'react';
import EventList from './eventList'


class Event extends Component {
	
  render() {
    return (<div>
	
       <div class="full-width-header">
      <div className="rs-breadcrumbs bg7 breadcrumbs-overlay">
		    <div className="breadcrumbs-inner">
		        <div className="container">
		            <div className="row">
		                <div className="col-md-12 text-center">
		                    <h1 className="page-title">OUR EVENTS</h1>
		                    <ul>
		                        <li>
		                            <a className="active" href="index.html">Home</a>
		                        </li>
		                        <li>Events</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
           
		</div>

        </div>  

        <EventList />
        </div>
    );
  }
}

export default Event;




































