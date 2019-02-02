import React, { Component } from "react";
import Slider from "react-slick";
import "./gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Dot from "./dotsvg";

class Gallery extends Component {
  render() {
    const members = ["irakli", "mindia", "rusa", "sh", "stef", "dat"];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      customPaging: function(i) {
        return (
          <div class="dot">
            <Dot width={20} height={15} />
          </div>
        );
      }
    };

    return (
      <div class="slider-wrapper">
        <TransitionGroup>
          <CSSTransition>
            <Slider {...settings}>
              {members.map(member => (
                <div className="sxva">
                  {" "}
                  <img src={require(`../band/${member}.jpg`)} />{" "}
                </div>
              ))}
            </Slider>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default Gallery;
