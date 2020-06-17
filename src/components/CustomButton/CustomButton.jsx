import React from "react";

function CustomButton({ text, buttonEvent }) {
  return (
    <div className="buttonWrapper">
      <button className="btn" onClick={buttonEvent}>
        {text}kk
      </button>
    </div>
  );
}

export default CustomButton;
