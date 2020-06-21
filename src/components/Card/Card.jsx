import React from "react";
import "./Card.css";
import CustomButton from "../CustomButton/CustomButton";
import { addItemCartAction } from "../../Redux/Cart/Action";
import { connect } from "react-redux";

function Card({ item, addItemsToCart }) {
  const { name, imageUrl, price } = item;
  return (
    <div className="cardContainer">
      <div
        className="imageContainer"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <CustomButton
          btnClass="btn  addToCartBtn"
          text="Add To Cart"
          submitButtonEvent={() => addItemsToCart(item)}
        ></CustomButton>
      </div>

      <div className="productPriceAndName">
        <h6>{name}</h6>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItemsToCart: (item) => dispatch(addItemCartAction(item)),
});

export default connect(null, mapDispatchToProps)(Card);
