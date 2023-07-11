import { css, keyframes, styled } from "styled-components";
import React from "react";

type Direction = "top" | "bottom";

interface Props {
  children: React.ReactNode;
  hoverDirection?: Direction;
  animated?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const textOpacity = (direction: Direction = "top") => keyframes`
  0% {
    opacity: 0;
    transform: ${
      direction === "top" ? "translateY(-100%)" : "translateY(100%)"
    }; 
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const runnerBorder = keyframes`
  0% {
    border-right: 1px solid pink;
  }
  25% {
    border-bottom: 1px solid pink;
  }
  50% {
    border-left: 1px solid pink;
  }
  100% {
    border-top: 1px solid pink;
  }
`;

const StyledButton = styled.button.attrs<{
  $animationDirection: Direction;
  $haveAnimation: boolean;
}>({
  type: "button",
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;

  ${(props) => {
    return props.$haveAnimation
      ? css`
          & :not(:first-child) {
            display: none;
            transition: opacity 0.3s ease-in;
            opacity: 0;
          }
        `
      : "";
  }}
  &:hover {
    animation: ${runnerBorder} 0.5s linear infinite;
    border-radius: 8px;
    padding: 0.25rem;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    
    ${(props) => {
      return props.$haveAnimation
        ? css`
            & :not(:first-child) {
              display: inline-block;
              opacity: 1;
              animation: ${textOpacity(props.$animationDirection)} 0.3s linear;
            }
          `
        : "";
    }}
`;

export default function Button({
  children,
  hoverDirection = "top",
  animated = true,
  onClick,
}: Props) {
  return (
    <StyledButton
      onClick={onClick}
      $haveAnimation={animated}
      $animationDirection={hoverDirection}
    >
      {children}
    </StyledButton>
  );
}
