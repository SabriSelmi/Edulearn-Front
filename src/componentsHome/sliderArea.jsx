import React,{Component} from "react";
import Slide1 from "./image/slide1.jpg";
import Slide2 from "./image/slide2.jpg";
import Slide3 from "./image/slide3.jpg";


import { Carousel } from 'react-responsive-carousel';

class SliderArea extends Component {
    render() {
        return (
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false} >
                <div>
                    <img src={Slide1} alt="slide" />

                </div>
                <div>
                    <img src={Slide2} alt="slide"/>

                </div>
                <div>
                    <img src={Slide3} alt="slide"/>

                </div>
            </Carousel>
        );
    }
}
export default SliderArea;