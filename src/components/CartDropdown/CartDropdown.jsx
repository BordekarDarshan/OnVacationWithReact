import React from "react";
import "./CartDropdown.css";
import { connect } from "react-redux";

function CartDropdown({ goToCheckout, cartItemsList }) {
  return (
    <div className="cartDropDownWrapper">
      <div className="cartItemsWrapper">
        {cartItemsList ? cartItemsList.map((item) => <h1>{item.id}</h1>) : null}
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
  cartItemsList: state.isCartVisible.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
