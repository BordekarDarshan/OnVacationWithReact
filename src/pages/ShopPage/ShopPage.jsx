import React, { Component } from "react";
import "./ShopPage.css";
import { shopData } from "../../Data/ProductData.js";
import CollectionCard from "../../components/CollectionCard/CollectionCard";

export class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: shopData,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div className="container-fluid">
        {collection.map(({ id, ...otherProps }) => (
          <CollectionCard key={id} {...otherProps}></CollectionCard>
        ))}
      </div>
    );
  }
}

export default ShopPage;
