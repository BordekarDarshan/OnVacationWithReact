import React, { Component } from "react";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { connect } from "react-redux";
import { userAction } from "../../Redux/User/Action";

export class Navigation extends Component {
  render() {
    const { currentUser } = this.props;
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
          {currentUser ? (
            <li onClick={() => auth.signOut()} className="userLogout">
              SIGN Out
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

const mapStateToProps = (state) => {
  console.log(state);

  return state;
};

export default connect(mapStateToProps, { userAction })(Navigation);
