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
        <i
          class="fa fa-chevron-left"
          aria-hidden="true"
          onClick={() => dispatch(QuantityDecreaseAction(item))}
        ></i>

        <span className="quantityFont">{quantity}</span>

        <i
          class="fa fa-chevron-right"
          aria-hidden="true"
          onClick={() => dispatch(addItemCartAction(item))}
        ></i>
      </div>

      <div className="productPrice customSpace">${price}</div>

      <div className="removeIcon customSpace">
        <i
          class="fa fa-times"
          aria-hidden="true"
          onClick={() => dispatch(removeItemCartAction(item))}
        ></i>
      </div>
    </div>
  );
}

export default connect(null)(CartItemListBlock);
