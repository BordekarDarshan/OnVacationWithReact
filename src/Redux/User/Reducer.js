const InitialState = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "Sign_In_Success":
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case "Sign_In_Failure":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
