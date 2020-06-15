import React from "react";

import "./Banner.css";
import { withRouter } from "react-router-dom";
function Banner({ bannerHead, bannerSubHead, img, unique, linkUrl, history }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bannerWrapper"
      key={unique}
    >
      <div className="bannerButton" onClick={() => history.push(`${linkUrl}`)}>
        <h4>{bannerHead}</h4>
        <p>{bannerSubHead}</p>
      </div>
    </div>
  );
}

export default withRouter(Banner);
