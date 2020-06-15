import React, { Component } from "react";
import "./HomePage.css";
import { Homepage } from "../../Data/HomePage.js";
import Banner from "../../components/Banner/Banner";

export class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <li>logo</li>
          </div>
          <ul className="navigationOption">
            <li>SHOP</li>
            <li>CONTACT</li>
            <li>SIGN IN</li>
            <li>
              <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
        <div className="shopContainer">
          {Homepage.map((data) => (
            <Banner
              bannerImg={data.img}
              unique={data.id}
              buttonHead={data.bannerHead}
              bttonSubHeading={data.bannerSubHead}
            ></Banner>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
