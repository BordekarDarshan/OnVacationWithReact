import React from "react";
import "./Checkout.css";
import {
  CheckoutContainer,
  CheckoutHeaderSpan,
  CheckoutHeader,
  AmtCard,
  TotalAmt,
} from "./CheckoutStyle";
import { selectCartItems, selectTotalAmount } from "../../Redux/Cart/Selector";
import { connect } from "react-redux";
import EmptyCartMessage from "../../components/EmptyCartMessage/EmptyCartMessage";
import CartItemListBlock from "../../components/CartItemListBlock/CartItemListBlock";
import StripeButton from "../../components/StripeButton/StripeButton";

function Checkout({ itemForCheckout, totalAmountCheckOut }) {
  return itemForCheckout.length > 0 ? (
    <CheckoutContainer>
      <CheckoutHeader>
        {["Product", "", "", "Price", "Remove"].map((item, index) => (
          <CheckoutHeaderSpan key={index}>{item}</CheckoutHeaderSpan>
        ))}
      </CheckoutHeader>

      {itemForCheckout.map((item) => (
        <React.Fragment key={item.id}>
          <CartItemListBlock item={item}></CartItemListBlock>
        </React.Fragment>
      ))}
      <AmtCard>
        <TotalAmt>Total ${totalAmountCheckOut}</TotalAmt>
        <StripeButton totalPrice={totalAmountCheckOut}></StripeButton>
      </AmtCard>
    </CheckoutContainer>
  ) : (
    <EmptyCartMessage
      wrapperClass="EmptyCartWrapper"
      msgClass="emptyCartMsg"
    ></EmptyCartMessage>
  );
}

const mapStateToProps = (state) => ({
  itemForCheckout: selectCartItems(state),
  totalAmountCheckOut: selectTotalAmount(state),
});

export default connect(mapStateToProps)(Checkout);
