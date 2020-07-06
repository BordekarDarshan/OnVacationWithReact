import React from "react";
import {
  ProductPriceAndName,
  CardContainer,
  ImageContainer,
  AddToCartBtn,
} from "./CardStyle";

import { addItemCartAction } from "../../Redux/Cart/Action";
import { connect } from "react-redux";

function Card({ item, addItemsToCart }) {
  const { name, imageUrl, price } = item;
  return (
    <CardContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }}>
        <AddToCartBtn onClick={() => addItemsToCart(item)} className="btn">
          Add To Cart
        </AddToCartBtn>
      </ImageContainer>

      <ProductPriceAndName>
        <h6>{name}</h6>
        <p>{`$${price}`}</p>
      </ProductPriceAndName>
    </CardContainer>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItemsToCart: (item) => dispatch(addItemCartAction(item)),
});

export default connect(null, mapDispatchToProps)(Card);
