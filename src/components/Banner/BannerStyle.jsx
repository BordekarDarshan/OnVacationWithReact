import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  min-width: 29%;
  background-position: center;
  background-size: cover;
  height: 20rem;
  flex: 1 1 0;
  margin: 2%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    min-width: 46%;
  }
  @media screen and (max-width: 370px) {
    min-width: 96%;
  }
`;

export const BannerButton = styled.div`
  min-width: 50%;
  background-color: black;
  opacity: 0.8;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: wheat;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: black;
    opacity: 1;
  }
`;
