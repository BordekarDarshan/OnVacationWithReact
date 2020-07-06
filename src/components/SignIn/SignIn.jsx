import React, { Component } from "react";
import { signInWithGoogle } from "../../Firebase/Firebase";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { auth } from "../../Firebase/Firebase";

import "./SignIn.css";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  getInputSignIn = async (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  eventSignIN = async () => {
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log("Couldn't Sign In!");
    }
  };
  eventSignInGoogle = () => {
    signInWithGoogle();
  };
  render() {
    return (
      <div className="signInContainer">
        <h5>I already have an account</h5>
        <p>Sign in with your email and Password.</p>

        <form onClick={(event) => event.preventDefault()}>
          <CustomInput
            type="email"
            onChange={this.getInputSignIn}
            value={this.state.email}
            placeholder="Email"
            name="email"
          />
          <CustomInput
            type="password"
            onChange={this.getInputSignIn}
            value={this.state.password}
            placeholder="Password"
            name="password"
          />

          <div className="customButtonContainer">
            <CustomButton
              type="submit"
              onClick={this.eventSignIN}
              className="btn signIn"
            >
              SIGN IN
            </CustomButton>
            <CustomButton
              type="submit"
              onClick={this.eventSignInGoogle}
              className="btn googleSignIn"
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
