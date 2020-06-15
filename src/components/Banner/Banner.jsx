import React from "react";

import "./Banner.css";
function Banner({ bannerHead, bannerSubHead, img, unique, goToPage }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bannerWrapper"
      key={unique}
    >
      <div className="bannerButton" onClick={goToPage}>
        <h4>{bannerHead}</h4>
        <p>{bannerSubHead}</p>
      </div>
    </div>
  );
}

export default Banner;
