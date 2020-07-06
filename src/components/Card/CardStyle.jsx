import styled from "styled-components";

export const AddToCartBtn = styled.button`
  display: none !important;
`;
// On hove ImageContainer button will pop up

export const ImageContainer = styled.div`
  background-position: center;
  background-size: cover;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.8;
  }
  :hover ${AddToCartBtn} {
    display: flex !important;
    background: rgba(255, 255, 255, 0.932);
    color: black;
  }
  @media screen and (max-width: 800px) {
    background-position: center;
    background-size: cover;
    height: 20rem;
    display: flex;
  }
  @media screen and (max-width: 368px) {
    background-position: center;
    background-size: cover;
    height: 20rem;
    display: flex;
  }
`;

export const ProductPriceAndName = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  width: 18%;
  margin: 1%;
  @media screen and (max-width: 800px) {
    min-width: 42%;
    flex: 1 1 0;
    margin: 4%;
  }

  @media screen and (max-width: 368px) {
    min-width: 92%;
    flex: 1 1 0;
    margin: 4%;
  }
`;
