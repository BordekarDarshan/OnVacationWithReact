import React from "react";
import { connect } from "react-redux";
import CollectionCard from "../CollectionCard/CollectionCard";
import { selectShopCollection } from "../../Redux/ShoppageRedux/Selector";

function ShopPage({ shopData }) {
  return (
    <div className="container-fluid mt-2">
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionCard key={id} {...otherProps}></CollectionCard>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  shopData: selectShopCollection(state),
});

export default connect(mapStateToProps)(ShopPage);
