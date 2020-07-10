import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { isCollectionLoaded } from "../../Redux/ShoppageRedux/Selector";
import Collection from "./Collection";

const mapStateToProps = (state) => ({
  isLoading: !isCollectionLoaded(state),
});

export const CollectionContainer = connect(mapStateToProps)(
  Spinner(Collection)
);
