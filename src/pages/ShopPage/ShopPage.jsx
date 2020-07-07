import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/Firebase";
export class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const CollectionRef = firestore.collection("collections");
    // whenever collectionRef gets update or run for the first time this CollectionRef wikk send us the snapshot
    // representing the code of our collection objects array at the time when this code renders.
    // will get from "onSnapshot" is snapshot object of our collection
    CollectionRef.onSnapshot(async (snapshot) =>
      convertCollectionsSnapshotToMap(snapshot)
    );
  }

  render() {
    const { match } = this.props;
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
}

export default ShopPage;
