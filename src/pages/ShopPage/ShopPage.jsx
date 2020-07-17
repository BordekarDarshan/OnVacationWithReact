import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { CollectionOverviewContainer } from "../../components/CollectionOverview/CollectionOverviewContainer";
import { CollectionContainer } from "../Collection/CollectionContainer";
import { fetchCollectionStart } from "../../Redux/ShoppageRedux/Action";

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
  getCollection: () => dispatch(fetchCollectionStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);

// Note => Don't forget to call function like "FetchCollectionAsync()" Don't metion only FetchCollectionAsync it is not a prop.
