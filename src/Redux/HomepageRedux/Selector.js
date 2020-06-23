import { createSelector } from "reselect";

const selectHomeState = (state) => state;

export const selectBannerData = createSelector(
  [selectHomeState],
  (data) => data.bannerData
);
