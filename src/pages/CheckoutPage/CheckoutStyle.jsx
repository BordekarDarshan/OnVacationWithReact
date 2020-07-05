import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 5% 0 4% 0;
`;

export const CheckoutHeader = styled.div`
  width: 60%;
  display: flex;
  padding: 1% 0 1% 0;
  background-color: #05192d;

  @media screen and (max-width: 768px) {
    width: 95%;
    display: flex;
  }
`;

export const CheckoutHeaderSpan = styled.span`
  width: 20%;
  text-align: center;
  color: white;
  :nth-child(3)::after {
    content: "Quantity";
  }

  :nth-child(2)::after {
    content: "Description";
  }

  @media screen and (max-width: 368px) {
    :nth-child(3)::after {
      content: "Qty";
    }
    :nth-child(2)::after {
      content: "Desc";
    }
  }
`;

export const AmtCard = styled.div`
  margin-top: 10px;
  display: flex;
  width: 50%;
  justify-content: space-evenly;

  @media screen and (max-width: 368px) {
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const TotalAmt = styled.span`
  font-size: x-large;
  font-weight: lighter;
`;
