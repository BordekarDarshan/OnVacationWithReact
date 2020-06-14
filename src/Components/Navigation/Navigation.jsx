import React, { Component } from "react";
import "./Navigation.css";

export class Navigation extends Component {
  render() {
    return (
      <div className="navigationWrapper">
        <ul className="navigationFirstPart">
          <li>Home</li>
          <li>About</li>
        </ul>
        <ul className="navigationSecondPart">
          <li>Login</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
