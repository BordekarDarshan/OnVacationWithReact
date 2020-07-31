export const GoogleSignInStart = () => ({
  type: "Google_Sign_In_Start",
});

export const EmailSignInStart = (emailAndPassword) => ({
  type: "Email_Sign_In_Start",
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: "Sign_In_Success",
  payload: user,
});

export const signInFailure = (error) => ({
  type: "Sign_In_Failure",
  payload: error,
});

export const checkUserSession = () => ({
  type: "Check_User_Session",
});
