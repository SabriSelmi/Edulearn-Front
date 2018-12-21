import React from 'react';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBContainer } from "mdbreact";



  
 const Eventitem =(props) => {
   console.log(props.onclick);
 
    return (
	
        <div>
                           <div className="row space-bt30 ">
                   <div className="col-lg-6 col-md-12">
                    	<div className="event-item">
	                        <div className="row rs-vertical-middle">
	                        	<div className="col-md-6">
	                        	    <div className="event-img">
								
	                        <img src='images/events/4.jpg' alt=''/>
                                        <a className="image-link"title="University Tour 2018">
										<i class="fa fa-heart-o" aria-hidden="true" onClick={props.onclick}></i></a>
                                 
	                        	    </div>                        		
	                        	</div>
	                        	<div className="col-md-6">
	                    	        <div className="event-content">
	                    	        	<div className="event-meta">	
										<div className="event-time">
		                    	        		<i className="fa fa-calendar">	</i>
												<span>{props.event.date}</span>
		                    	        	</div>
	                    	        		<div className="event-time">
	                    	        			<i className="fa fa-clock-o"></i>
	                    	        			<span>{props.event.time}</span>
	                    	        		</div>
	                    	        	</div>
										

	                    	        	<h3 className="event-title"><a href="events-details.html">{props.event.name} <br/>ceremony 2017</a></h3>

                    	        		<div className="event-location">
                    	        			<i className="fa fa-map-marker"></i>
                    	        			<span>{props.event.location}</span>
                    	        		</div>
	                    	        	<div className="event-desc">
	                    	        		<p>
	                    	        		{props.event.history}
	                    	        		</p>
	                    	        	</div>
	                    	        	<div className="event-btn">
										<p className="d-flex">{props.event.like}								
										<MDBPopover
            component="p"
            placement="right"
            popoverBody="personnes qui aiment ce evenement."
			className="light-blue-text"
          >
            <MDBPopoverHeader>Liste des utilisateurs</MDBPopoverHeader>
            <MDBPopoverBody>
					firas hamdouni<br/>sabri selmi
            </MDBPopoverBody>
          </MDBPopover></p>
	                    	        	</div>
	                    	        </div> 
									  		
	                        	</div>
							
	                        </div>                    		
                    	</div>
                    </div>
				
					<div className="col-lg-6 col-md-12 d-flex flex-wrap">
					 {props.image.map((el,i)=>	   
						<div className="event-item">
						<div className="row rs-vertical-middle col">
							<div className="col-md">
						<div className="event-img">
					 <img id="img" class="img-thumbnail rounded event-img" src={el.src} key={i} style={{width:"120px",height:"120px", margin:"5px"}}
					 /> 
                                        <a className="image-link" title="University Tour 2018">
                                            <i className="fa fa-search" data-toggle="modal" data-target="#myModal"></i>
                                        </a>
	                        	    </div>   
									</div>
					</div>
										{/*modal */}
										<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">


	 {props.image.map((el,i)=>	  
      <div class="modal-body">
	  <img className="img-fluid thumbnail w-100" src={el.src}  key={i} alt=''/>
      </div>

	 )}

    </div>
  </div>
</div>
                    </div>   )}
		</div>			
					
					</div>

<hr className="style14"/>

	
					</div>
		
                  
    );
  }


export default Eventitem;


