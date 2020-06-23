import React from "react";
import "./ShopPage.css";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { connect } from "react-redux";

function ShopPage({ shopData }) {
  return (
    <div className="container-fluid mt-2">
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionCard key={id} {...otherProps}></CollectionCard>
      ))}
    </div>
  );
}

const mapStateToProps = ({ shopData }) => ({
  shopData,
});

export default connect(mapStateToProps)(ShopPage);
