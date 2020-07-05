import React from "react";
import { BannerButton, BannerWrapper } from "./BannerStyle";
import { withRouter } from "react-router-dom";

function Banner({ bannerHead, bannerSubHead, img, unique, linkUrl, history }) {
  return (
    <BannerWrapper style={{ backgroundImage: `url(${img})` }} key={unique}>
      <BannerButton onClick={() => history.push(`${linkUrl}`)}>
        <h4>{bannerHead}</h4>
        <p>{bannerSubHead}</p>
      </BannerButton>
    </BannerWrapper>
  );
}

export default withRouter(Banner);
