import React from "react";
import "./CustomInput.css";

function CustomInput({ ...props }) {
  return (
    <div className="inputWrapper">
      <input {...props} className="modifiedIpnut" required></input>
    </div>
  );
}

export default CustomInput;
