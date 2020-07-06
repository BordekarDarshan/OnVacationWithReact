import React from "react";
import "./CollectionCard.css";
import Card from "../Card/Card";
import { withRouter } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

function CollectionCard({ title, routeName, items, match, history }) {
  return (
    <div className="shopCollectionContainer">
      <div className="collectionNamAndButton">
        <h5>{title}</h5>
        <CustomButton
          className="btn viewAllBtn"
          onClick={() => history.push(`${match.path}/${routeName}`)}
        >
          View All
        </CustomButton>
      </div>

      <div className="cardWrapper">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Card key={item.id} item={item}></Card>
          ))}
      </div>
    </div>
  );
}

export default withRouter(CollectionCard);
