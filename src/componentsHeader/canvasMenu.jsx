import React,{Component} from "react";

class Canvas extends Component{
    render(){
        return(
            <div>

               <div aria-hidden={true}  className="modal fade search-modal" role="dialog" tabIndex="-1">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden={true} className="fa fa-close"></span>
                    </button>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="search-block clearfix">
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="eg: Computer Technology"
                                               type="text"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Canvas;