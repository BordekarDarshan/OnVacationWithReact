import React from "react";
import "./HomePage.css";
import { Homepage } from "../../Data/HomePage.js";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <React.Fragment>
      <div className="background">
        <div className="container-fluid">
          <div className="shopContainer pattern-cross-dots-sm text-white">
            {Homepage.map(({ id, ...otherProps }) => (
              <Banner key={id} {...otherProps}></Banner>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </React.Fragment>
  );
}

export default HomePage;
