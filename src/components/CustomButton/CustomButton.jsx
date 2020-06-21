import React from "react";

function CustomButton({ text, submitButtonEvent, type, btnClass, style }) {
  return (
    <button
      type={type}
      className={btnClass}
      onClick={submitButtonEvent}
      style={style}
    >
      {text}
    </button>
  );
}

export default CustomButton;
