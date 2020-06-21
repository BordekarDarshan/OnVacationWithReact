let Initial_State = {
  hidden: true,
  cartItems: [],
};
export const cartReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "Change_Cart_Visibility":
      return { ...state, hidden: !state.hidden };
    case "Add_Items_Cart":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};
