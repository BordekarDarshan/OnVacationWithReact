import { Homepage } from "../../Data/HomePage";

export const bannerReducer = (state = Homepage, action) => {
  switch (action.type) {
    case "Show_Banner_Data":
      return action.payload;

    default:
      return state;
  }
};
