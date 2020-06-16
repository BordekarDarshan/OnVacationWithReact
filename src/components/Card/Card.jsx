import React from "react";
import "./Card.css";

function Card({ name, imageUrl, price }) {
  return (
    <div className="cardContainer">
      <div
        className="imageContainer"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="productPriceAndName">
        <h6>{name}</h6>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
}

export default Card;
