import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/Firebase";
import { connect } from "react-redux";
import { updateShopColection } from "../../Redux/ShoppageRedux/Action";
import Spinner from "../../components/Spinner/Spinner";

const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionWithSpinner = Spinner(Collection);

export class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const CollectionRef = firestore.collection("collections");
    // whenever collectionRef gets update or run for the first time this CollectionRef wikk send us the snapshot
    // representing the code of our collection objects array at the time when this code renders.
    // will get from "onSnapshot" is snapshot object of our collection
    CollectionRef.onSnapshot(async (snapshot) => {
      const finalData = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(finalData);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="container-fluid mt-2">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
          component={CollectionOverview}
        ></Route>
        <Route
          path={`${match.path}/:collectionName`}
          render={(props) => (
            <CollectionWithSpinner isLoading={isLoading} {...props} />
          )}
        ></Route>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateShopColection(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
