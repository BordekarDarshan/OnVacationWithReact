import React from "react";
import "./CustomButtonStyle.css";

function CustomButton({ googleSignIn, signIn, signUp, children, ...props }) {
  return (
    <button
      className={` ${googleSignIn ? "googleSignIn" : ""} ${
        signIn ? "signIn" : ""
      } ${signUp ? "signUp" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
