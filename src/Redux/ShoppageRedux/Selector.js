import { createSelector } from "reselect";

const selectshopState = (state) => state;

export const selectShopData = createSelector(
  [selectshopState],
  (data) => data.shopData
);
