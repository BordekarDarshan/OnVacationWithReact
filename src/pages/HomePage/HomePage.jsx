import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import { ShopContainer, Background } from "./HomepageStyle";
import { selectBannerData } from "../../Redux/HomepageRedux/Selector";

function HomePage({ bannerData }) {
  return (
    <React.Fragment>
      <Background>
        <div className="container-fluid">
          <ShopContainer className="pattern-cross-dots-sm text-white">
            {bannerData.map(({ id, ...otherProps }) => (
              <Banner key={id} {...otherProps}></Banner>
            ))}
          </ShopContainer>
        </div>
      </Background>

      <Footer></Footer>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  bannerData: selectBannerData(state),
});

export default connect(mapStateToProps)(HomePage);
