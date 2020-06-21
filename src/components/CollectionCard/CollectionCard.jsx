import React from "react";
import Card from "../Card/Card";
import "./CollectionCard.css";

function CollectionCard({ title, routeName, items }) {
  return (
    <div className="shopCollectionContainer">
      <div className="collectionNamAndButton">
        <h5>{title}</h5>
        <button
          className="btn"
          style={{ backgroundColor: "#083232", color: "White" }}
        >
          View All
        </button>
      </div>

      <div className="cardWrapper">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <Card key={id} {...otherProps}></Card>
          ))}
      </div>
    </div>
  );
}

export default CollectionCard;
