import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { FetchCollectionAsync } from "../../Redux/ShoppageRedux/Action";
import { CollectionOverviewContainer } from "../../components/CollectionOverview/CollectionOverviewContainer";
import { CollectionContainer } from "../Collection/CollectionContainer";

export class ShopPage extends Component {
  componentDidMount() {
    this.props.getCollection();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="container-fluid mt-2">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        ></Route>
        <Route
          path={`${match.path}/:collectionName`}
          component={CollectionContainer}
        ></Route>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCollection: () => dispatch(FetchCollectionAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

// Note => Don't forget to call function like "FetchCollectionAsync()" Don't metion only FetchCollectionAsync it is not a prop.
