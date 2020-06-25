import { createSelector } from "reselect";

const collectionIdMap = {
  hats: 1,
  jackets: 3,
  sneakers: 2,
  womens: 4,
  mens: 5,
};

const selectshopState = (state) => state;

export const selectShopData = createSelector(
  [selectshopState],
  (data) => data.shopData
);

export const selectCollection = (collectionName) =>
  createSelector([selectShopData], (data) =>
    data.find((data) => data.id === collectionIdMap[collectionName])
  );
