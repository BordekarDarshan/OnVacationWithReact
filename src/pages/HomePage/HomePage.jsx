import React, { Component } from "react";
import "./HomePage.scss";

export class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <li>logo</li>
          </div>
          <ul className="navigationOption">
            <li>SHOP</li>
            <li>CONTACT</li>
            <li>SIGN IN</li>
            <li>CART</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
