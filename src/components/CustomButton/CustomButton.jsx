import React from "react";

function CustomButton({ text, submitButtonEvent, type }) {
  return (
    <div className="buttonWrapper">
      <button type={type} className="btn" onClick={submitButtonEvent}>
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
