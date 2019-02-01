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
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/band">
            about
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/rame">
            rame
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/rume">
            rume
          </NavLink>
        </li>
      </ul>
      /*    </div>
      </div> */
    );
  }
}

export default NavBar;
