import React from "react";

import "./Banner.css";
function Banner(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.bannerImg})` }}
      className="bannerWrapper"
      key={props.unique}
    >
      <div className="bannerButton" onClick={props.goToPage}>
        <h4>{props.buttonHead}</h4>
        <p>{props.bttonSubHeading}</p>
      </div>
    </div>
  );
}

export default Banner;
