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

// Asynchronous Action Creator
export const FetchCollectionAsync = () => {
  return (dispatch) => {
    const CollectionRef = firestore.collection("collections");

    dispatch(fetchCollectionStart());
    CollectionRef.get()
      .then((snapshot) => {
        const finalData = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(finalData));
      })

      .catch((error) => dispatch(fetchCollectionFailure(error.message)));
  };
};
