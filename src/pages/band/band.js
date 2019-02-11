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
          <div class="item item-1">
            {" "}
            <p>
              giorgi shaverdovi <br />
              <br />
              <br /> <span>bass guitar</span>
            </p>
          </div>
          <div class="item item-2">
            {" "}
            <p>
              mindia lukuridze <br />
              <br />
              <br /> <span>guitar</span>
            </p>
          </div>
          <div class="item item-3">
            {" "}
            <p>
              irakli lomsadze
              <br />
              <br />
              <br /> <span>keyboard</span>
            </p>
          </div>
          <div class="item item-4">
            <p>
              davit bichiashvili <br />
              <br />
              <br /> <span>guitar</span>
            </p>
          </div>
          <div class="item item-5">
            {" "}
            <p>
              rusa jijiashvili <br />
              <br />
              <br /> <span>vocals</span>{" "}
            </p>
          </div>
          <div class="item item-6">
            {" "}
            <p>
              tornike lukuridze <br />
              <br />
              <br /> <span>drums</span>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Band;
