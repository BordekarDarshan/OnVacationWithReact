import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/Firebase";

export const fetchCollectionStart = () => ({
  type: "Fetch_Collection_Start",
});

export const fetchCollectionSuccess = (collectionMap) => {
  return (dispatch) => {
    dispatch({
      type: "Fetch_Collection_Success",
      payload: collectionMap,
    });
  };
};

export const fetchCollectionFailure = (errorMsg) => {
  return (dispatch) => {
    dispatch({
      type: "Fetch_Failure",
      payload: errorMsg,
    });
  };
};

// Asynchronous Action Creator.
// Redux Thunk doesn't care about action objects. [{ type: "Fetch_Collection_Success",payload: collectionMap}]
// It is only going to catch "FetchCollectionAsync" returning function.
// Redux Thunk allow us to do async action.

// Normal redux flow
// Everytime we dispatched action it just went to the reducer as an object [{ type: "Fetch_Collection_Success",payload: collectionMap}]
// But With Redux Thunk, it allows us to catch action and its only going to detect actions that ain't objects. It's only detect action with function.

export const FetchCollectionAsync = () => {
  return (dispatch) => {
    // Redux thunk give "dispatch" functionality as a parameter.
    const CollectionRef = firestore.collection("collections");
    // Now in this function, we can dispatch normal objects to reducer.
    dispatch(fetchCollectionStart());
    CollectionRef.get()
      .then((snapshot) => {
        const finalData = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(finalData));
      })

      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};

// Note => Middleware is like tunnel that intercept our action before the go into the reducer and modify them or add things to them.
