import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import "./SignUp.css";
import { signUpStart } from "../../Redux/User/Action";
import { connect } from "react-redux";

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
    const { signUpAction } = this.props;
    const { displayName, email, confirmPassword, password } = this.state;

    if (password !== confirmPassword) {
      alert("Password Don't Match! Check Again...");
      return;
    }
    signUpAction({ displayName, email, password });
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

          <CustomButton type="submit" onClick={this.sendDataEvent} SignUp>
            SIGN UP
          </CustomButton>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  signUpAction: (signUpData) => dispatch(signUpStart(signUpData)),
});
export default connect(null, mapDispatchToProps)(SignUp);
