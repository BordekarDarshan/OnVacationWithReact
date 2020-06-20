import React, { Component } from "react";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { connect } from "react-redux";

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

          {this.props.userProp ? (
            <li onClick={() => auth.signOut()} className="userLogout">
              SIGN Out
              {console.log(this.props.userProp)}
            </li>
          ) : (
            <Link to="/signin" className="userLogin">
              <li>SIGN IN</li>
            </Link>
          )}

          <li>YOUR CART</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userProp: state.user.currentUser,
});

export default connect(mapStateToProps)(Navigation);
