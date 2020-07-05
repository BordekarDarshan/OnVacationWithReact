import React, { Component } from "react";
import { SignInAndSignUpWrapper } from "./SignInAndSignUpPageStyle";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

export class SignInAndSignUpPage extends Component {
  render() {
    return (
      <SignInAndSignUpWrapper className="container">
        <SignUp></SignUp>
        <SignIn></SignIn>
      </SignInAndSignUpWrapper>
    );
  }
}

export default SignInAndSignUpPage;
