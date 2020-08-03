import React from "react";
import OnlySpinner from "../OnlySpinner/OnlySpinner";

const Spinner = (WrappedComponent) => {
  const WithSpinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <OnlySpinner />
    ) : (
      <WrappedComponent {...props}></WrappedComponent>
    );
  };
  return WithSpinner;
};

export default Spinner;
