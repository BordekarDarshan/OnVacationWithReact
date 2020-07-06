import React from "react";
import { ModifiedInput } from "./CustomInputStyle";

function CustomInput({ ...props }) {
  return (
    <div>
      <ModifiedInput
        {...props}
        className="modifiedIpnut"
        required
      ></ModifiedInput>
    </div>
  );
}

export default CustomInput;
