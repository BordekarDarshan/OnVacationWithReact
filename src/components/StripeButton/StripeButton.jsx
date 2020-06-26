import React from "react";
import "./StripeButton.css";
import History from "../../History/history";
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { resetCart } from "../../Redux/Cart/Action";

function StripeButton({ totalPrice, dispatch }) {
  const stripePrice = totalPrice * 100;
  const publishKey =
    "pk_test_51GxwWhCBmyVy3B4ng8EjhFFDtTQZ965BsLakVmPn2jMT1h13Id4Yypm4RJpeKvtpvuChD4bXbcHfiOZynJi7FshT00cvtZFLIu";

  const onToken = async (token) => {
    await dispatch(resetCart());
    History.push("/");
  };

  return (
    <StripeCheckout
      name="Watch out Clothing"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/rm2X8QP/owl.png"
      description={`Your Total is $ ${totalPrice}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    >
      <button
        className="btn"
        style={{ backgroundColor: "#05192d", color: "white" }}
      >
        Pay with <i className="fa fa-credit-card" aria-hidden="true"></i>
      </button>
    </StripeCheckout>
  );
}

export default withRouter(connect(null)(StripeButton));
