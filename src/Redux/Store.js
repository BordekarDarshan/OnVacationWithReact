import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { userReducer } from "./User/Reducer";

const middleware = [logger];

const rootReducer = combineReducers({
  user: userReducer,
});
export const store = createStore(rootReducer, applyMiddleware(...middleware));
