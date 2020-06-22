import React from "react";
import "./CartItemList.css";

function CartItemList({ name, imageUrl, quantity, price }) {
  return (
    <div className="itemListWrapper">
      <div className="imgItemContainer">
        <img src={imageUrl} alt="Cart Item"></img>
      </div>
      <div className="productNamePriceWrapper">
        <p className="removeMargin">{name}</p>
        <p className="removeMargin">
          {quantity} x ${price}
        </p>
      </div>
    </div>
  );
}

export default CartItemList;
