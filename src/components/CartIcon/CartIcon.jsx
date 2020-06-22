import React from "react";
import "./CartIcon.css";
import { connect } from "react-redux";
import { cartAction } from "../../Redux/Cart/Action";

function CartIcon({ changeCartVisibilty, cartItemsCount }) {
  return (
    <li className="userCart" onClick={() => changeCartVisibilty()}>
      <img
        src="https://i.ibb.co/9qHtgy8/icons8-shopping-bag-50.png"
        alt="Cart"
      ></img>
      <span>{cartItemsCount}</span>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeCartVisibilty: () => dispatch(cartAction()),
});

const mapStateToProps = (state) => ({
  cartItemsCount: state.isCartVisible.cartItems.reduce(
    (prev, next) => prev + next.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
