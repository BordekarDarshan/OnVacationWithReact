import React from "react";
import "./HomePage.css";
import { Homepage } from "../../Data/HomePage.js";
import Banner from "../../components/Banner/Banner";

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="header ">
        <div className="logo">
          <li>logo</li>
        </div>
        <ul className="navigationOption ">
          <li>SHOP</li>
          <li>CONTACT</li>
          <li>SIGN IN</li>
          <li>
            <i class="fa fa-shopping-bag fa-2x"></i>
          </li>
        </ul>
      </div>
      <div className="shopContainer pattern-cross-dots-sm text-white">
        {Homepage.map(({ id, ...otherProps }) => (
          <Banner key={id} {...otherProps}></Banner>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
