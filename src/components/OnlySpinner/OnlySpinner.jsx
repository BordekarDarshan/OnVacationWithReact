import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./OnlySpinner.Style";

function OnlySpinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  );
}

export default OnlySpinner;
