import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import Collection from "../Collection/Collection";
import { connect } from "react-redux";
import { FetchCollectionAsync } from "../../Redux/ShoppageRedux/Action";
import Spinner from "../../components/Spinner/Spinner";
import {
  selectFetchedCollection,
  isCollectionLoaded,
} from "../../Redux/ShoppageRedux/Selector";

const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionWithSpinner = Spinner(Collection);

export class ShopPage extends Component {
  componentDidMount() {
    this.props.getCollection();
  }

  render() {
    const { match, isFetched, isCollectionLoaded } = this.props;

    return (
      <div className="container-fluid mt-2">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetched} {...props} />
          )}
          component={CollectionOverview}
        ></Route>
        <Route
          path={`${match.path}/:collectionName`}
          render={(props) => (
            <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />
          )}
        ></Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetched: selectFetchedCollection(state),
  isCollectionLoaded: isCollectionLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  // Don't forget to call function like "FetchCollectionAsync()"
  // Don't metion only FetchCollectionAsync it is not prop.
  getCollection: () => dispatch(FetchCollectionAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
