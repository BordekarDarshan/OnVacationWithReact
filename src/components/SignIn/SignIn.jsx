import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  getInputSignIn = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  eventSignIN = () => {
    console.log("Click");
  };
  eventSignInGoogle = () => {
    console.log("Clicks");
  };
  render() {
    return (
      <div className="signInContainer">
        <h5>I already have an account</h5>
        <p>Sign in with your email and Password.</p>

        <CustomInput
          type="email"
          inputOnChangeEvent={this.getInputSignIn}
          value={this.state.email}
          placeholder="Email"
          name="email"
        />
        <CustomInput
          type="password"
          inputOnChangeEvent={this.getInputSignIn}
          value={this.state.password}
          placeholder="Password"
          name="password"
        />

        <div className="customButtonContainer">
          <CustomButton
            type="submit"
            submitButtonEvent={this.eventSignIN}
            text="SIGN IN"
          />
          <CustomButton
            type="submit"
            submitButtonEvent={this.eventSignInGoogle}
            text="SIGN IN WITH GOOGLE"
          />
        </div>
      </div>
    );
  }
}

export default SignIn;
