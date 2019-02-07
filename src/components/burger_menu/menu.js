import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./menu.css";

class BurgerMenu extends React.Component {
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
        right: "20px",
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
        background: "#373a47", //slide background
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em"
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
        color: "#000",
        margin: "20px",
        textDecoration: "none",
        textTransform: "uppercase"
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)"
      }
    };
    if (isMobile) {
      return (
        <Menu right styles={styles}>
          <NavLink id="home" className="menu-item" to="/">
            Home
          </NavLink>
          <NavLink className="menu-item" to="/band">
            About
          </NavLink>
          <NavLink className="menu-item" to="/gallery">
            gallery
          </NavLink>
          <NavLink id="contact" className="menu-item" to="/contact">
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
