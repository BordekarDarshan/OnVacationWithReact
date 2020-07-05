import styled from "styled-components";

export const ItemListWrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: row;
  padding: 3%;
  margin: 1%;
  background: black;
  border-radius: 5px;
  max-height: 90px;
`;

export const ImgItemContainer = styled.div`
  width: 31%;
  display: flex;
`;
export const ImgItemContainerImg = styled.img`
  width: 50px;
  min-height: 50px;
`;

export const ProductNamePriceWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 62%;
`;

export const RemoveMargin = styled.p`
  margin-bottom: 0;
  color: wheat;
  text-align: center;
  font-weight: lighter;
`;
