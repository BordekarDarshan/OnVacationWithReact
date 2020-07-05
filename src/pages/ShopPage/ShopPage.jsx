import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";

function ShopPage({ match }) {
  return (
    <div className="container-fluid mt-2">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      ></Route>
      <Route
        path={`${match.path}/:collectionName`}
        component={Collection}
      ></Route>
    </div>
  );
}

export default ShopPage;
