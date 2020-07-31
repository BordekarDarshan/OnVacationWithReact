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
    case "Sign_Out_Success":
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case "Sign_Out_Failure":
    case "Sign_In_Failure":
    case "Sign_Up_Failure":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
