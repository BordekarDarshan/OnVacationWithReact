import styled from "styled-components";

export const SignInAndSignUpWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;
