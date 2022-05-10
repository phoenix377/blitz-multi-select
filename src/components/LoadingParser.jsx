import { styled } from "goober";
import React from "react";
import Spinner from "../assets/SpinnerIcon";

const LoadingParser = ({ children, isLoading }) => {
  return isLoading ? <Loading /> : <>{children}</>;
};

const Loading = styled(Spinner)`
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  animation: rotating 1s linear infinite;
`;

export default LoadingParser;
