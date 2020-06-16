import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className=" footerContainer">
      <div className="logoWrapper">
        <img src="https://i.ibb.co/rm2X8QP/owl.png" alt="logo"></img>
        <p className="text-center">Watch Out</p>
      </div>

      <div className="addressContact">
        <h5>Visit</h5>
        <p>Watch Out inc.</p>
      </div>

      <div className="Follow">
        <h5>Follow</h5>
        {["Instagram", "Twitter", "Linkedin"].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Footer;
