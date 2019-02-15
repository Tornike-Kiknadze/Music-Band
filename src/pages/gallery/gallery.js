import React, { Component } from "react";
import Slider from "react-slick";
import "./gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Gallery extends Component {
  render() {
    const members = [
      "b",
      "l",
      "u",
      "e",
      "c",


    ];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      autoplay: false,
      autoplaySpeed: 50,
      className: "fade",
      slidesToScroll: 1,
      arrows: false
      /*  customPaging: function(i) {
        return (
          <div class="dot">
            <Dot width={20} height={15} />
          </div>
        );
      } */
    };

    return (
      <div class="slider-wrapper">
        {members.map(member => (
          <div className="sxva">
            <img src={require(`./src/${member}.jpg`)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;
