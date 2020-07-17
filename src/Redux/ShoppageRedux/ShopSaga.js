import { call, takeEvery, put } from "redux-saga/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../Firebase/Firebase";
import { fetchCollectionFailure, fetchCollectionSuccess } from "./Action";

// takeEvery => It listens for every action of specific type that we pass to it.
// creates a non - blocking call
// means it doesn't stop other saga's to run or any Js script code

// Saga Generator Function.
export function* FetchCollectionAsync() {
  try {
    const CollectionRef = firestore.collection("collections");

    const snapshot = yield CollectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery("Fetch_Collection_Start", FetchCollectionAsync);
}
