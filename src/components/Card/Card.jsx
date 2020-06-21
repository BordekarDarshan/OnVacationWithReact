import React from "react";
import "./Card.css";
import CustomButton from "../CustomButton/CustomButton";

function Card({ name, imageUrl, price }) {
  return (
    <div className="cardContainer">
      <div
        className="imageContainer"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <CustomButton
          btnClass="btn  addToCartBtn"
          text="Add To Cart"
        ></CustomButton>
      </div>
      <div className="productPriceAndName">
        <h6>{name}</h6>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
}

export default Card;
