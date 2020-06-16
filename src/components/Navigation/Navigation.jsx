import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export class Navigation extends Component {
  render() {
    return (
      <div className="header ">
        <div className="logo">
          <li>logo</li>
        </div>
        <ul className="navigationOption ">
          <li>
            <Link className="text-secondary" to="/shop">
              SHOP
            </Link>
          </li>
          <li>CONTACT</li>
          <li>SIGN IN</li>
          <li>
            <i className="fa fa-shopping-bag fa-2x"> </i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
