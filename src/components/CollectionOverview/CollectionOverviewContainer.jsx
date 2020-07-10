import { connect } from "react-redux";
import { selectFetchedCollection } from "../../Redux/ShoppageRedux/Selector";
import Spinner from "../Spinner/Spinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = (state) => ({
  isLoading: selectFetchedCollection(state),
});

export const CollectionOverviewContainer = connect(mapStateToProps)(
  Spinner(CollectionOverview)
);
