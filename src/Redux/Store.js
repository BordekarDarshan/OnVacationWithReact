import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { userReducer } from "./User/Reducer";
import { cartReducer } from "./Cart/Reducer";

const middleware = [logger];

const rootReducer = combineReducers({
  user: userReducer,
  isCartVisible: cartReducer,
});
export const store = createStore(rootReducer, applyMiddleware(...middleware));
