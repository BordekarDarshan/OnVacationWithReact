import { SpinnerContainer, SpinnerOverlay } from "./Spinner.style";

import React from "react";

const Spinner = (WrappedComponent) => {
  const WithSpinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props}></WrappedComponent>
    );
  };
  return WithSpinner;
};

export default Spinner;
