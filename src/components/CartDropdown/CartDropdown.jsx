import React from "react";
import "./CartDropdown.css";

function CartDropdown(props) {
  return (
    <div className="cartDropDownWrapper">
      <div className="cartItemsWrapper"></div>
      <button
        type="button"
        className="btn btnCheckOut"
        style={{ backgroundColor: "#05192d", color: "white" }}
        onClick={props.goToCheckout}
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
}
export default CartDropdown;