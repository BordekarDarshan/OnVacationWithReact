import React from "react";
import "./CartDropdown.css";
import { connect } from "react-redux";
import CartItemList from "../CartItemList/CartItemList";
import { selectCartItems } from "../../Redux/Cart/Selector";
import { withRouter } from "react-router-dom";
import EmptyCartMessage from "../EmptyCartMessage/EmptyCartMessage";
import { cartAction } from "../../Redux/Cart/Action";

function CartDropdown({ cartList, history, dispatch }) {
  console.log(history);

  return (
    <div className="cartDropDownWrapper">
      {cartList.length === 0 ? (
        <EmptyCartMessage
          wrapperClass="noCartItems"
          msgClass="customP"
        ></EmptyCartMessage>
      ) : (
        <React.Fragment>
          <div className="cartItemsWrapper">
            {cartList
              ? cartList.map((item) => <CartItemList key={item.id} {...item} />)
              : null}
          </div>
          <button
            type="button"
            className="btn btnCheckOut"
            style={{ backgroundColor: "#05192d", color: "white" }}
            onClick={() => {
              history.push("/checkout");
              dispatch(cartAction());
            }}
          >
            GO TO CHECKOUT
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartList: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// Connect passes "dispatch" into our component as prop.
