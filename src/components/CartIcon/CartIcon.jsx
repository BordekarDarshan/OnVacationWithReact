import React from "react";
import "./CartIcon.css";

function CartIcon() {
  return (
    <li className="userCart">
      <img
        src="https://i.ibb.co/9qHtgy8/icons8-shopping-bag-50.png"
        alt="Cart"
      ></img>
      <span>0</span>
    </li>
  );
}

export default CartIcon;
