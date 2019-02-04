import React, { Component } from "react";
import "./home.css";
import Type from "../../components/typist/typist";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="home-wrapper">
          {" "}
          <div className="type-wrapper">
            <Type className="type-wrapper" />
          </div>
          <div className="home">
            <div className="home-gradient fade">
              {" "}
              <h1>BLUE CAT</h1>{" "}
            </div>
          </div>
          <div className="nav">
            <div className="nav-gradient" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
