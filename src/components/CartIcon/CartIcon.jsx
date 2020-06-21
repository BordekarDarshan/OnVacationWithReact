import React from "react";
import "./CartIcon.css";
import { connect } from "react-redux";
import { cartAction } from "../../Redux/Cart/Action";

function CartIcon(props) {
  return (
    <li className="userCart" onClick={() => props.changeCartVisibilty()}>
      <img
        src="https://i.ibb.co/9qHtgy8/icons8-shopping-bag-50.png"
        alt="Cart"
      ></img>
      <span>0</span>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  changeCartVisibilty: () => dispatch(cartAction()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
