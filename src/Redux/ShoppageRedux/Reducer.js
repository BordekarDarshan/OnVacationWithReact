const Initial_State = {
  collections: null,
};

export const shopReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "Update_Collection":
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};
