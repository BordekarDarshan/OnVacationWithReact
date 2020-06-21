let Initial_State = {
  hidden: true,
};
export const cartReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "Change_Cart_Visibility":
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};
