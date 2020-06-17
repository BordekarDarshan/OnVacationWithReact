import React, { Component } from "react";
import "./SignInAndSignUpPage.css";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";

export class SignInAndSignUpPage extends Component {
  render() {
    return (
      <div className="container SignInAndSignUpWrapper">
        <SignUp></SignUp>
        <SignIn></SignIn>
      </div>
    );
  }
}

export default SignInAndSignUpPage;
