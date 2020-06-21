import React, { Component } from "react";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";

export class Navigation extends Component {
  render() {
    const { userProp } = this.props;
    return (
      <div className="header ">
        <div className="logo">
          <li className="webLogo"></li>
          {userProp ? (
            <li className="userName">Hey, {userProp.displayName}</li>
          ) : null}
        </div>

        <ul className="navigationOption ">
          <li>
            <Link to="/" className="navigationOptionColor">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/shop" className="navigationOptionColor">
              SHOP
            </Link>
          </li>

          {userProp ? (
            <li
              onClick={() => auth.signOut()}
              className="userLogout iconSize"
            ></li>
          ) : (
            <Link to="/signin" className="userLogin iconSize"></Link>
          )}
          <CartIcon></CartIcon>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userProp: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigation);
