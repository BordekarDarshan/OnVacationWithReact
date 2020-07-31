import React, { Component } from "react";
import { connect } from "react-redux";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import { GoogleSignInStart, EmailSignInStart } from "../../Redux/User/Action";
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
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    await emailSignInStart(email, password);
  };
  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton type="submit" onClick={this.eventSignIN} SignIn>
              SIGN IN
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              GoogleSignIn
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(GoogleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(EmailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
