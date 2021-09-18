import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
class Index extends Component {

    render() {
        const settings = {
            dots: true,
            autoplay: true,
            className: 'posterSlide',
            dotsClass: 'posterSlide_dots'
        };
        return (
            <Slider {...settings} >
                <div>
                    <div className="posterSlide_image">123</div>
                </div>
                <div>
                    <div className="posterSlide_image">321</div>
                </div>
                <div>
                    <div className="posterSlide_image">456</div>
                </div>
                <div>
                    <div className="posterSlide_image">654</div>
                </div>
                <div>
                    <div className="posterSlide_image">789</div>
                </div>
            </Slider>
        );
    }
}

export default Index;