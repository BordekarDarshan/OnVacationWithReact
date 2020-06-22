import React from "react";
import "./CartItemListBlock.css";
import { connect } from "react-redux";
import {
  removeItemCartAction,
  QuantityDecreaseAction,
  addItemCartAction,
} from "../../Redux/Cart/Action";

function CartItemListBlock({ item, dispatch }) {
  const { imageUrl, name, price, id, quantity } = item;
  return (
    <div className="cartItemListWrapper" key={id}>
      <div className="productImg">
        <img src={imageUrl} alt="checkout"></img>
      </div>

      <div className="productDesc customSpace">{name}</div>

      <div className="productQuantity customSpace">
        <span
          className="increaseFont"
          onClick={() => dispatch(QuantityDecreaseAction(item))}
        >
          &lt;
        </span>
        {quantity}
        <span
          className="increaseFont"
          onClick={() => dispatch(addItemCartAction(item))}
        >
          &gt;
        </span>
      </div>

      <div className="productPrice customSpace">${price}</div>

      <div className="removeIcon customSpace">
        <span
          className="increaseFont"
          onClick={() => dispatch(removeItemCartAction(item))}
        >
          X
        </span>
      </div>
    </div>
  );
}

export default connect(null)(CartItemListBlock);
