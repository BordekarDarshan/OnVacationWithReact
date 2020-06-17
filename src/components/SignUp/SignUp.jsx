import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

export class SignUp extends Component {
  render() {
    return (
      <div className="signUpContainer">
        <h5>I don't have an account</h5>
        <p>Sign up with your email and Password.</p>

        <CustomInput />
        <CustomInput />
        <CustomInput />
        <CustomInput />

        <CustomButton />
      </div>
    );
  }
}

export default SignUp;
