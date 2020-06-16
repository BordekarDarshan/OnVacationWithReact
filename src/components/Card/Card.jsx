import React from "react";
import "./Card.css";

function Card({ name, imageUrl, price }) {
  return (
    <div className="cardContainer">
      <div
        className="imageContainer"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <button>ADD TO CART</button>
      </div>
      <div className="productPriceAndName">
        <p>{name}</p>
        <p>{`$${price}`}</p>
      </div>
    </div>
  );
}

export default Card;
