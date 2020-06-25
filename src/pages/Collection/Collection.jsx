import React from "react";
import { connect } from "react-redux";
import "./Collection.css";
import { selectCollection } from "../../Redux/ShoppageRedux/Selector";
import Card from "../../components/Card/Card";

function Collection({ shopData }) {
  console.log(shopData);

  return (
    <div className="collectionNameContainer">
      <h5>{shopData.title}</h5>
      <div className="shopItemsWrapper">
        {shopData.items.map((data) => (
          <React.Fragment key={data.id}>
            <Card item={data}></Card>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  shopData: selectCollection(ownProps.match.params.collectionName)(state),
});

export default connect(mapStateToProps)(Collection);
