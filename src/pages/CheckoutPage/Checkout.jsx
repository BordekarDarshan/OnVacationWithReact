import React from "react";
import "./Checkout.css";
import { selectCartItems, selectTotalAmount } from "../../Redux/Cart/Selector";
import { connect } from "react-redux";
import EmptyCartMessage from "../../components/EmptyCartMessage/EmptyCartMessage";
import CartItemListBlock from "../../components/CartItemListBlock/CartItemListBlock";
import StripeButton from "../../components/StripeButton/StripeButton";

function Checkout({ itemForCheckout, totalAmountCheckOut }) {
  return itemForCheckout.length > 0 ? (
    <div className="checkoutContainer mt-5 mb-4">
      <div className="checkoutHeader">
        {["Product", "", "", "Price", "Remove"].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      {itemForCheckout.map((item) => (
        <React.Fragment key={item.id}>
          <CartItemListBlock item={item}></CartItemListBlock>
        </React.Fragment>
      ))}
      <div className="amtAndCard">
        <span className="totalAmt">Total ${totalAmountCheckOut}</span>
        <StripeButton totalPrice={totalAmountCheckOut}></StripeButton>
      </div>
    </div>
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
