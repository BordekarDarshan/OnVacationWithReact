import React from "react";
import {
  ItemListWrapper,
  ImgItemContainer,
  ImgItemContainerImg,
  RemoveMargin,
  ProductNamePriceWrapper,
} from "./CartItemListStyle.jsx";

function CartItemList({ name, imageUrl, quantity, price }) {
  return (
    <ItemListWrapper>
      <ImgItemContainer>
        <ImgItemContainerImg
          src={imageUrl}
          alt="Cart Item"
        ></ImgItemContainerImg>
      </ImgItemContainer>
      <ProductNamePriceWrapper>
        <RemoveMargin>{name}</RemoveMargin>
        <RemoveMargin className="removeMargin">
          {quantity} x ${price}
        </RemoveMargin>
      </ProductNamePriceWrapper>
    </ItemListWrapper>
  );
}

export default CartItemList;
