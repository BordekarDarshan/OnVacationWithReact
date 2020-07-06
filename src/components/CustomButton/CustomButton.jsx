import React from "react";
import "./CustomButtonStyle.css";

function CustomButton({
  viewAllBtn,
  googleSignIn,
  signIn,
  signUp,
  btnCheckOut,
  children,
  ...props
}) {
  return (
    <button
      className={` ${googleSignIn ? "googleSignIn" : ""} ${
        signIn ? "signIn" : ""
      } ${signUp ? "signUp" : ""} ${viewAllBtn ? "viewAllBtn" : ""}
      ${btnCheckOut ? "btnCheckOut" : ""}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
