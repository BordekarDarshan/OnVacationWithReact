import React from "react";
import "./CartDropdown.css";
import { connect } from "react-redux";
import History from "../../History/history";
import CartItemList from "../CartItemList/CartItemList";
import { selectCartItems } from "../../Redux/Cart/Selector";
import { withRouter } from "react-router-dom";
import EmptyCartMessage from "../EmptyCartMessage/EmptyCartMessage";
import { cartAction } from "../../Redux/Cart/Action";
import { currentUserSelector } from "../../Redux/User/User.Selector";
import CustomButton from "../CustomButton/CustomButton";

function CartDropdown({ cartList, history, dispatch, isLoggedIn }) {
  const checkUserStatus = () => {
    if (isLoggedIn === null) {
      History.push("/signin");
    } else {
      history.push("/checkout");
      dispatch(cartAction());
    }
  };
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
          <CustomButton
            type="button"
            className="btn btnCheckOut"
            onClick={checkUserStatus}
          >
            GO TO CHECKOUT
          </CustomButton>
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartList: selectCartItems(state),
  isLoggedIn: currentUserSelector(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// Connect passes "dispatch" into our component as prop.
