import React from "react";
import "./Checkout.css";
import { selectCartItems, selectTotalAmount } from "../../Redux/Cart/Selector";
import { connect } from "react-redux";
import EmptyCartMessage from "../../components/EmptyCartMessage/EmptyCartMessage";
import CartItemListBlock from "../../components/CartItemListBlock/CartItemListBlock";

function Checkout({ itemForCheckout, totalAmountCheckOut }) {
  return itemForCheckout.length > 0 ? (
    <div className="checkoutContainer mt-5">
      <div className="checkoutHeader">
        {["Product", "", "", "Price", "Remove"].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      {itemForCheckout.map((item) => (
        <CartItemListBlock item={item}></CartItemListBlock>
      ))}

      <span className="totalAmt">Total ${totalAmountCheckOut}</span>
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
