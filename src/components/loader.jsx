import { css, keyframes } from "@emotion/react";
import React from "react";
import { FaMusic } from "react-icons/fa";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const loadingPageStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e293b; /* Background color for the loading page */
`;

const loadingAnimationStyles = css`
  font-size: 48px;
  color: #fff; /* Color of the loading animation */
  animation: ${rotate} 2s linear infinite; /* Apply the rotation animation */
`;

const LoadingMusicPage = () => {
  return (
    <div css={loadingPageStyles}>
      <div css={loadingAnimationStyles}>
        <FaMusic />
      </div>
    </div>
  );
};

export default LoadingMusicPage;
