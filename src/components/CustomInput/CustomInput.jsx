import React from "react";

function CustomInput({ type, inputOnChangeEvent, value, placeholder, name }) {
  return (
    <div className="inputWrapper">
      <input
        type={type}
        onChange={inputOnChangeEvent}
        value={value}
        placeholder={placeholder}
        name={name}
      ></input>
    </div>
  );
}

export default CustomInput;
