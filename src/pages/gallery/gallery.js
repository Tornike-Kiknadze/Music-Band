import React, { Component } from "react";
import Slider from "react-slick";
import "./gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false
    };

    return (
      <div class="slider-wrapper">
        <Slider {...settings}>
          <div>
            <div className="sxva"> </div>
          </div>
          <div>
            <div className="sxva"> </div>
          </div>
          <div>
            <div className="sxva"> </div>
          </div>
          <div>
            <div className="sxva"> </div>
          </div>
          <div>
            <div className="sxva"> </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Gallery;
