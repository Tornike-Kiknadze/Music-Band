import React, { Component } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      /*    <div class="table">
        <div class="cell"> */
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

      /*    </div>
      </div> */
    );
  }
}

export default NavBar;
