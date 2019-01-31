import React, { Component } from "react";
import "./band.css";

class Band extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="panel">
          <div class="panel__item panel__item--1" />
          <div class="panel__item panel__item--2" />
          <div class="panel__item panel__item--3">
            {" "}
            <p>dato bichiashvili</p>
          </div>
          <div class="panel__item panel__item--4" />
        </div>
        <footer class="footer">
          <p>Samuel Silva &copy; 2018</p>
        </footer>
      </div>
    );
  }
}

export default Band;
