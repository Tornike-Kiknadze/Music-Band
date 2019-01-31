import React, { Component } from "react";
import "./content.css";
class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-gradient">
          {" "}
          <h1>BLUE CAT</h1>{" "}
        </div>
        <div className="content-blur" />

        <h2>this is a website</h2>
      </div>
    );
  }
}

export default Content;
