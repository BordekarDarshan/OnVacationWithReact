import React, { Component } from "react";
import { auth } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { cartListToggle } from "../../Redux/Cart/Selector";
import { currentUserSelector } from "../../Redux/User/User.Selector";

export class Navigation extends Component {
  render() {
    const { userProp, cartVisible } = this.props;
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
        {cartVisible ? null : <CartDropdown></CartDropdown>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userProp: currentUserSelector(state),
  cartVisible: cartListToggle(state),
});

export default connect(mapStateToProps)(Navigation);
