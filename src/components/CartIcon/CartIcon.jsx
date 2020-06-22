import React from "react";
import "./CartIcon.css";
import { connect } from "react-redux";
import { cartAction } from "../../Redux/Cart/Action";
import { selectCartItemsCount } from "../../Redux/Cart/Selector";

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
  cartItemsCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
