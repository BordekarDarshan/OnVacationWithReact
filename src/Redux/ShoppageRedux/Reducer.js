import { shopData } from "../../Data/ProductData";

export const shopReducer = (state = shopData, action) => {
  switch (action.type) {
    case "Show_Shop_Data":
      return action.payload;

    default:
      return state;
  }
};
