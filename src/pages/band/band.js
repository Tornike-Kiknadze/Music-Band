import React, { Component } from "react";
import "./band.css";

class Band extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel-wrapper">
        <div class="panel">
          <div class="panel__item panel__item--1" />
          <div class="panel__item panel__item--2" />
          <div class="panel__item panel__item--3">
            {" "}
            <p>dato bichiashvili</p>
          </div>
          <div class="panel__item panel__item--4" />
          <div class="panel__item panel__item--5" />
          <div class="panel__item panel__item--6" />
        </div>
      </div>
    );
  }
}

export default Band;
