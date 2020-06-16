import React from "react";
import "./HomePage.css";
import { Homepage } from "../../Data/HomePage.js";
import Banner from "../../components/Banner/Banner";

function HomePage() {
  return (
    <div className="background">
      <div className="container-fluid">
        <div className="shopContainer pattern-cross-dots-sm text-white">
          {Homepage.map(({ id, ...otherProps }) => (
            <Banner key={id} {...otherProps}></Banner>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
