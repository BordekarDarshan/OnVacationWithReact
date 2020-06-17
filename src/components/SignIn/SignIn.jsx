import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

export class SignIn extends Component {
  render() {
    return (
      <div className="signInContainer">
        <h5>I already have an account</h5>
        <p>Sign in with your email and Password.</p>

        <CustomInput />
        <CustomInput />

        <div className="customButtonContainer">
          <CustomButton />
          <CustomButton />
        </div>
      </div>
    );
  }
}

export default SignIn;
