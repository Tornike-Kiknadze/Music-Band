import React, { Component } from "react";

import "./gallery.css";


class Gallery extends Component {
  render() {
    const members = [
      "b",
      "l",
      "u",
      "e",
      "c",


    ];



    return (
      <div className="slider-wrapper">
        {members.map(member => (
          <div className="sxva">
            <img alt='' src={require(`./src/${member}.jpg`)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;
