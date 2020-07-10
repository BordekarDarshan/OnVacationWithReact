import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./User/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { bannerReducer } from "./HomepageRedux/Reducer";
import { shopReducer } from "./ShoppageRedux/Reducer";

const middleware = [logger, thunk];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["isCartVisible"],
};

const rootReducer = combineReducers({
  user: userReducer,
  isCartVisible: cartReducer,
  bannerData: bannerReducer,
  shopData: shopReducer,
});

const reducerPersist = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  reducerPersist,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);

// persistStore is the persisted version of redux store.

// [import store from "redux-persist/lib/storage"]
// get the local storage onject on window browser.
// means want use localstorage as default storage.

// Now We can maontain Cart State with persist
