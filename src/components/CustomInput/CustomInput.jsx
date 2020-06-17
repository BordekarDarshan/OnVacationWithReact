import React from "react";

function CustomInput({ type, inputOnChangeEvent, value, placeholder }) {
  return (
    <div className="inputWrapper">
      <input
        type={type}
        onChange={inputOnChangeEvent}
        value={value}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default CustomInput;
