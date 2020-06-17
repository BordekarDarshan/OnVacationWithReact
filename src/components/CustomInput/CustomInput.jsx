import React from "react";
import "./CustomInput.css";

function CustomInput({ type, inputOnChangeEvent, value, placeholder, name }) {
  return (
    <div className="inputWrapper">
      <input
        type={type}
        onChange={inputOnChangeEvent}
        value={value}
        placeholder={placeholder}
        name={name}
        className="modifiedIpnut"
      ></input>
    </div>
  );
}

export default CustomInput;
