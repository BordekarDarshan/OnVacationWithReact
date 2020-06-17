import React, { Component } from "react";
import { signInWithGoogle } from "../../Firebase/Firebase";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignIn.css";

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
    console.log("Clicks");
  };
  eventSignInGoogle = () => {
    signInWithGoogle();
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
            btnClass="btn  rounded-0"
            style={{ backgroundColor: "#9dada3", color: "black" }}
          />
          <CustomButton
            type="submit"
            submitButtonEvent={this.eventSignInGoogle}
            text="SIGN IN WITH GOOGLE"
            btnClass="btn rounded-0"
            style={{ backgroundColor: "#083232", color: "white" }}
          />
        </div>
      </div>
    );
  }
}

export default SignIn;
