import React from "react";
import "./CustomButton.css";

function CustomButton({ text, submitButtonEvent, type, btnClass, style }) {
  return (
    <div className="buttonWrapper">
      <button
        type={type}
        className={btnClass}
        onClick={submitButtonEvent}
        style={style}
      >
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
