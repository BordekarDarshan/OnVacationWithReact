import { createSelector } from "reselect";

const selectshopState = (state) => state;

export const selectShopData = createSelector(
  [selectshopState],
  (data) => data.shopData
);

export const selectShopCollection = createSelector([selectShopData], (data) =>
  Object.keys(data).map((item) => data[item])
);

export const selectCollection = (collectionName) =>
  createSelector([selectShopData], (data) => data[collectionName]);
