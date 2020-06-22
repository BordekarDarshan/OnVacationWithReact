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
        {["Product", "Description", "Quantity", "Price", "Remove"].map(
          (item, index) => (
            <div className="HeaderBlock" key={index}>
              <span>{item}</span>
            </div>
          )
        )}
      </div>

      {itemForCheckout.map((item) => (
        <CartItemListBlock {...item}></CartItemListBlock>
      ))}

      <div className="totalAmt customSpace">
        <span>Total ${totalAmountCheckOut}</span>
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
