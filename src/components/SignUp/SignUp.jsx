import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  getInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendDataEvent = () => {
    console.log("Click");
  };

  render() {
    return (
      <div className="signUpContainer">
        <h5>I don't have an account</h5>
        <p>Sign up with your email and Password.</p>

        <form onClick={(event) => event.preventDefault()}>
          <CustomInput
            type="text"
            inputOnChangeEvent={this.getInput}
            value={this.state.name}
            placeholder="Display Name"
            name="name"
          />
          <CustomInput
            type="email"
            inputOnChangeEvent={this.getInput}
            value={this.state.email}
            placeholder="Email"
            name="email"
          />
          <CustomInput
            type="password"
            inputOnChangeEvent={this.getInput}
            value={this.state.password}
            placeholder="Password"
            name="password"
          />
          <CustomInput
            type="password"
            inputOnChangeEvent={this.getInput}
            value={this.state.confirmPassword}
            placeholder="Confirm Password"
            name="confirmPassword"
          />

          <CustomButton
            type="submit"
            submitButtonEvent={this.sendDataEvent}
            text="SIGN UP"
          />
        </form>
      </div>
    );
  }
}

export default SignUp;
