import React from "react";
import { UserCartImg, UserCartSpan, UserCart } from "./CartIconStyle.jsx";
import { connect } from "react-redux";
import { cartAction } from "../../Redux/Cart/Action";
import { selectCartItemsCount } from "../../Redux/Cart/Selector";

function CartIcon({ changeCartVisibilty, cartItemsCount }) {
  return (
    <UserCart onClick={() => changeCartVisibilty()}>
      <UserCartImg
        src="https://i.ibb.co/9qHtgy8/icons8-shopping-bag-50.png"
        alt="Cart"
      ></UserCartImg>
      <UserCartSpan>{cartItemsCount}</UserCartSpan>
    </UserCart>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeCartVisibilty: () => dispatch(cartAction()),
});

const mapStateToProps = (state) => ({
  cartItemsCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
