const Initial_State = {
  collections: null,
  isFetching: false,
  errorMsg: undefined,
};

export const shopReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "Fetch_Collection_Start":
      return { ...state, isFetching: true };
    case "Fetch_Collection_Success":
      return { ...state, collections: action.payload, isFetching: false };
    case "Fetch_Failure":
      return { ...state, isFetching: false, errorMsg: action.payload };
    default:
      return state;
  }
};
