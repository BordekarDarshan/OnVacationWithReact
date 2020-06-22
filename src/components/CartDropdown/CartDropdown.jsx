import React from "react";
import "./CartDropdown.css";
import { connect } from "react-redux";
import CartItemList from "../CartItemList/CartItemList";

function CartDropdown({ goToCheckout, cartList }) {
  return (
    <div className="cartDropDownWrapper">
      {cartList.length === 0 ? (
        <div className="noCartItems">
          <img
            src="https://i.ibb.co/2PZ87gW/Empty-Bag.png"
            alt="Empty Cart"
          ></img>
          <p className="customP">
            There is nothing in your bag. Let's add some items
          </p>
        </div>
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
            onClick={goToCheckout}
          >
            GO TO CHECKOUT
          </button>
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartList: state.isCartVisible.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
