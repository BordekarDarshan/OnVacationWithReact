import React from "react";
import "./CartDropdown.css";
import { connect } from "react-redux";
import CartItemList from "../CartItemList/CartItemList";

function CartDropdown({ goToCheckout, cartList }) {
  return (
    <div className="cartDropDownWrapper">
      <div className="cartItemsWrapper">
        {cartList
          ? cartList.map((item) => <CartItemList key={item.id} {...item} />)
          : null}
      </div>
      <button
        type="button"
        className="btn btnCheckOut"
        style={{ backgroundColor: "#05192d", color: "white" }}
        onClick={goToCheckout}
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartList: state.isCartVisible.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
