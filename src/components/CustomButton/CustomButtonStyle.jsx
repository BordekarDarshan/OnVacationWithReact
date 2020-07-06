import styled, { css } from "styled-components";

const GoogleSignInStyle = css`
  margin-left: 2%;
  background-color: #083232 !important;
  color: white !important;
`;

const SignUp = css`
  background-color: #083232 !important;
  color: white !important;
`;

const SignIn = css`
  background-color: #9dada3 !important;
  color: black !important;
`;

const ViewAllBtn = css`
  background-color: #083232 !important;
  color: White !important;
`;

const BtnCheckOut = css`
  margin-top: auto;
  opacity: 0.9;
  background-color: #05192d !important;
  color: white !important;
`;

const GetButtonStyles = (props) => {
  if (props.GoogleSignIn) {
    return GoogleSignInStyle;
  }
  if (props.SignIn) {
    return SignIn;
  }
  if (props.SignUp) {
    return SignUp;
  }
  if (props.SignIn) {
    return SignIn;
  }
  if (props.ViewAllBtn) {
    return ViewAllBtn;
  }
  if (props.BtnCheckOut) {
    return BtnCheckOut;
  }
};

export const CustomButtonContainer = styled.button`
  ${GetButtonStyles};
`;
