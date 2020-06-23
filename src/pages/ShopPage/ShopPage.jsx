import React from "react";
import "./ShopPage.css";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { connect } from "react-redux";
import { selectShopData } from "../../Redux/ShoppageRedux/Selector";

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
  shopData: selectShopData(state),
});

export default connect(mapStateToProps)(ShopPage);
