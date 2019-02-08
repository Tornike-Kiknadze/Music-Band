import React, { Component } from "react";
import "./contact.css";

import Youtube from "../../assets/svg/youtube";
import Facebook from "../../assets/svg/facebook";
import Cat from "../../assets/svg/cat";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="contact-wrapper">
          {" "}
          <Cat width={60} height={60} className="cat" />
          <div class="p-wrapper">
            <p>you can find us on facebook and youtube </p>
          </div>
          <div className="contact">
            <div className="contact-gradient">
              <Youtube width={60} height={60} className="margin" />
              <Facebook width={60} height={60} className="margin" />
            </div>
          </div>
          <div className="box">
            <div className="box-gradient" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
