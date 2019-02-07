import React, { Component } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
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

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return null;
    } else {
      return (
        <ul class="dots">
          {" "}
          <li>
            <p>home</p>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <p>band</p>
            <NavLink activeClassName="active" to="/band">
              band
            </NavLink>
          </li>{" "}
          <li>
            <p>gallery</p>
            <NavLink activeClassName="active" to="/gallery">
              gallery
            </NavLink>
          </li>
          <li>
            <p>contact</p>
            <NavLink activeClassName="active" to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
      );
    }
  }
}

export default NavBar;
