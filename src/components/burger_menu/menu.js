import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./menu.css";

class BurgerMenu extends React.Component {
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
    const { width } = this.state;
    const isMobile = width <= 500;
    var styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "36px",
        height: "30px",
        left: "20px",
        top: "20px"
      },
      bmBurgerBars: {
        background: "#fff"
      },
      bmBurgerBarsHover: {
        background: "#a90000"
      },
      bmCrossButton: {
        height: "24px",
        width: "24px"
      },
      bmCross: {
        background: "#bdc3c7"
      },
      bmMenuWrap: {
        position: "fixed",
        height: "100%"
      },
      bmMenu: {
        background: "#232526", //slide background
        overflow: "hidden",
        fontSize: "1.15em",
        outline: "none"
      },
      bmMorphShape: {
        fill: "#373a47"
      },
      bmItemList: {
        display: "flex",
        flexDirection: "column",

        justifyContent: "center"
      },
      bmItem: {
        display: "inline-block",
        width: "100%",
        marginTop: "20px",
        textDecoration: "none",
        textTransform: "uppercase",
        color: "white"
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)"
      }
    };

    if (isMobile) {
      return (
        <Menu isOpen={this.state.isOpen} styles={styles}>
          <NavLink
            exact
            id="home"
            className="menu-item"
            activeClassName="active"
            to="/"
          >
            <p>Home</p>
          </NavLink>
          <NavLink activeClassName="active" className="menu-item" to="/band">
            Band
          </NavLink>
          <NavLink activeClassName="active" className="menu-item" to="/gallery">
            gallery
          </NavLink>
          <NavLink
            activeClassName="active"
            id="contact"
            className="menu-item"
            to="/contact"
          >
            Contact
          </NavLink>
        </Menu>
      );
    } else {
      return null;
    }
  }
}

export default BurgerMenu;
