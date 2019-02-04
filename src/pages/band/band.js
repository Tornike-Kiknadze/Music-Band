import React, { Component } from "react";
import "./band.css";

class Band extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel-wrapper">
        <div class="gallery">
          <div class="item item-1" />
          <div class="item item-2" />
          <div class="item item-3" />
          <div class="item item-4">
            <p>davit bichiashvili</p>
          </div>
          <div class="item item-5" />
        </div>
      </div>
    );
  }
}

export default Band;
