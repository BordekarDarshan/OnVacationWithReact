import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { createUserDataAfterSignIn, auth } from "../../Firebase/Firebase";
import "./SignUp.css";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  getInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendDataEvent = async () => {
    const { displayName, email, confirmPassword, password } = this.state;

    if (password !== confirmPassword) {
      alert("Password Don't Match! Check Again...");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDataAfterSignIn(user, { displayName });
    } catch (error) {
      console.log("User Account Creation Failed", error.message);
    }
  };

  render() {
    return (
      <div className="signUpContainer">
        <h5>I don't have an account</h5>
        <p>Sign up with your email and Password.</p>

        <form onClick={(event) => event.preventDefault()}>
          <CustomInput
            type="text"
            onChange={this.getInput}
            value={this.state.name}
            placeholder="Username"
            name="displayName"
          />
          <CustomInput
            type="email"
            onChange={this.getInput}
            value={this.state.email}
            placeholder="Email"
            name="email"
          />
          <CustomInput
            type="password"
            onChange={this.getInput}
            value={this.state.password}
            placeholder="Password"
            name="password"
          />
          <CustomInput
            type="password"
            onChange={this.getInput}
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            name="confirmPassword"
          />

          <CustomButton
            type="submit"
            onClick={this.sendDataEvent}
            className="btn signUp"
          >
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
