import React from "react";
import { CustomButtonContainer } from "./CustomButtonStyle";

function CustomButton({ children, ...props }) {
  return (
    <CustomButtonContainer {...props} className="btn">
      {children}
    </CustomButtonContainer>
  );
}

export default CustomButton;
