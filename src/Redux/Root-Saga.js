import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./ShoppageRedux/ShopSaga";
import { userSagas } from "./User/UserSaga";

export function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
