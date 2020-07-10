import React, { Component } from "react";
import { Route } from "react-router-dom";
import Collection from "../Collection/Collection";
import { connect } from "react-redux";
import { FetchCollectionAsync } from "../../Redux/ShoppageRedux/Action";
import Spinner from "../../components/Spinner/Spinner";
import { isCollectionLoaded } from "../../Redux/ShoppageRedux/Selector";
import { CollectionOverviewContainer } from "../../components/CollectionOverview/CollectionOverviewContainer";

const CollectionWithSpinner = Spinner(Collection);

export class ShopPage extends Component {
  componentDidMount() {
    this.props.getCollection();
  }

  render() {
    const { match, isCollectionLoaded } = this.props;

    return (
      <div className="container-fluid mt-2">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
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
  isCollectionLoaded: isCollectionLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCollection: () => dispatch(FetchCollectionAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

// Note => Don't forget to call function like "FetchCollectionAsync()" Don't metion only FetchCollectionAsync it is not a prop.
