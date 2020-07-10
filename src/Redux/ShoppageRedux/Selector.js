import { createSelector } from "reselect";

const selectshopState = (state) => state.shopData;

export const selectShopData = createSelector(
  [selectshopState],
  (data) => data.collections
);

export const selectShopCollection = createSelector([selectShopData], (data) =>
  data ? Object.keys(data).map((item) => data[item]) : []
);

export const selectCollection = (collectionName) =>
  createSelector([selectShopData], (data) =>
    data ? data[collectionName] : null
  );

export const selectFetchedCollection = createSelector(
  [selectshopState],
  (data) => data.isFetching
);
