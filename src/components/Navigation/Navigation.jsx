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
            <Link to="/shop" className="shopLink">
              SHOP
            </Link>
          </li>
          <li>SIGN IN</li>
          <li>YOUR CART</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
