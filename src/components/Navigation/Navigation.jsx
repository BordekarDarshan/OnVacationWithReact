import React, { Component } from "react";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { connect } from "react-redux";

export class Navigation extends Component {
  render() {
    const { userProp } = this.props;
    return (
      <div className="header ">
        <div className="logo">
          <li>logo</li>
        </div>
        <ul className="navigationOption ">
          {userProp ? (
            <li className="userName">{userProp.displayName}</li>
          ) : null}

          <li className="shopLink">
            <Link to="/shop">SHOP</Link>
          </li>

          {userProp ? (
            <li onClick={() => auth.signOut()} className="userLogout">
              SIGN OUT
            </li>
          ) : (
            <Link to="/signin" className="userLogin">
              <li>SIGN IN</li>
            </Link>
          )}

          <li className="userCart">YOUR CART</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userProp: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigation);
