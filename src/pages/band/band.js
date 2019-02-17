import React, { Component } from "react";
import "./band.css";


class Band extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      isOpen: false
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  showSettings(event) {
    event.preventDefault();
  }


  render() {


    return (
      <div className="panel-wrapper">
        <div className="gallery">
          <div className="item item-1">
            {" "}
            <p>
              giorgi shaverdovi
              <br />
              <br /> <span>bass guitar</span>
            </p>
          </div>
          <div className="item item-2">
            {" "}
            <p>
              mindia iukuridze <br />

              <br /> <span>guitar</span>
            </p>
          </div>
          <div className="item item-3">
            {" "}
            <p>
              irakli lomsadze

              <br />
              <br /> <span>keyboard</span>
            </p>
          </div>
          <div className="item item-4">
            <p>
              davit bichiashvili <br />

              <br /> <span>guitar</span>
            </p>
          </div>
          <div className="item item-5">
            {" "}
            <p>
              rusa jijiashvili <br />

              <br /> <span>vocals</span>{" "}
            </p>
          </div>
          <div className="item item-6">
            {" "}
            <p>
              tornike iukuridze <br />

              <br /> <span>drums</span>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Band;
