import React,{Component} from "react";
import CountUp from 'react-countup';

class CounterUp extends Component{
    render(){
        return(
            <div className="rs-counter pt-100 pb-70 bg3">
                <div className="container">
                    <div className="sec-title white-text mb-50 text-center">
                        <h2>ACHEIVEMENTS</h2>
                        <p>Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed nec molestie justo.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="rs-counter-list">
                                <h2 className="counter-number plus"><CountUp  end={60} delay={7} redraw={true}/>
                                   </h2>
                                <h4 className="counter-desc">TEACHERS</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="rs-counter-list">
                                <h2 className="counter-number plus"><CountUp  end={40} delay={7} redraw={true}/></h2>
                                <h4 className="counter-desc">COURSES</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="rs-counter-list">
                                <h2 className="counter-number plus"><CountUp  end={900} delay={7} redraw={true}/></h2>
                                <h4 className="counter-desc">STUDENTS</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="rs-counter-list">
                                <h2 className="counter-number plus"><CountUp  end={3675} delay={7} redraw={true}/></h2>
                                <h4 className="counter-desc">Satisfied Client</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CounterUp;