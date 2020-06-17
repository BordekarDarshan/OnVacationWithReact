import React, { Component } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";

export class SignInAndSignUpPage extends Component {
  render() {
    return (
      <div className="container">
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

        <div className="signUpContainer">
          <h5>I don't have an account</h5>
          <p>Sign up with your email and Password.</p>

          <CustomInput />
          <CustomInput />
          <CustomInput />
          <CustomInput />

          <CustomButton />
        </div>
      </div>
    );
  }
}

export default SignInAndSignUpPage;
