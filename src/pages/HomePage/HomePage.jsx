import React from "react";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";

function HomePage({ bannerData }) {
  return (
    <React.Fragment>
      <div className="background">
        <div className="container-fluid">
          <div className="shopContainer pattern-cross-dots-sm text-white">
            {bannerData.map(({ id, ...otherProps }) => (
              <Banner key={id} {...otherProps}></Banner>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </React.Fragment>
  );
}
const mapStateToProps = ({ bannerData }) => ({
  bannerData,
});

export default connect(mapStateToProps)(HomePage);
