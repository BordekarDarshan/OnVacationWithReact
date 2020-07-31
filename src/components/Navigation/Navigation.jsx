import React, { Component } from "react";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { cartListToggle } from "../../Redux/Cart/Selector";
import { currentUserSelector } from "../../Redux/User/User.Selector";
import {
  Li,
  Header,
  Logo,
  WebLogo,
  UserName,
  UserLogin,
  UserLogout,
  NavigationOption,
  NavigationOptionColor,
} from "./NavigationStyle";
import { signOutStart } from "../../Redux/User/Action";

export class Navigation extends Component {
  render() {
    const { userProp, cartVisible } = this.props;
    return (
      <Header>
        <Logo>
          <WebLogo></WebLogo>
          {userProp ? <UserName>Hey, {userProp.displayName}</UserName> : null}
        </Logo>

        <NavigationOption>
          <Li>
            <NavigationOptionColor to="/">HOME</NavigationOptionColor>
          </Li>
          <Li>
            <NavigationOptionColor to="/shop">SHOP</NavigationOptionColor>
          </Li>

          {userProp ? (
            <UserLogout onClick={() => this.props.signOut()}></UserLogout>
          ) : (
            <UserLogin to="/signin"></UserLogin>
          )}
          <CartIcon></CartIcon>
        </NavigationOption>
        {cartVisible ? null : <CartDropdown></CartDropdown>}
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  userProp: currentUserSelector(state),
  cartVisible: cartListToggle(state),
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
