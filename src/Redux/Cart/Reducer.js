import { addItemToCart, decreaseQuantity } from "./Util/CartUtil";

let Initial_State = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "Change_Cart_Visibility":
      return { ...state, hidden: !state.hidden };
    case "Add_Items_Cart":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case "Quantity_Increase_Action":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case "Quantity_Decrease_Action":
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems, action.payload),
      };

    case "Remove_Cart_Item":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

//return { ...state, cartItems: [...state.cartItems, action.payload] };
