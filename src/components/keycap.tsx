import { keyframes, styled } from "styled-components";
import React, { useState } from "react";
import { Size } from "../types";

interface Props {
  children: React.ReactNode;
  size?: Size | number;
  isPressed?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const pressAnimation = keyframes`
  0% {
    transform: rotateX(10deg) scale(100%);
  }
  100% {
    transform: rotateX(10deg) scale(90%);
  }
`;

const StyledKey = styled.button<{ $width?: number; $height?: number }>`
  display: flex;
  justify-content: center;
  width: ${(props) => props.$width || "75"}px;
  height: ${(props) => props.$height || "75"}px;
  background-color: transparent;
  font-size: 12pt;
  padding: 1rem;
  border: 0.5px solid pink;
  border-radius: 8px;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: rotateX(10deg);
  font-family: "Kanit", sans-serif;
  font-weight: 400;

  &:hover {
    box-shadow: 12px 12px 12px -5px rgba(255, 192, 203, 0.6);
  }

  &:active {
    box-shadow: 12px 12px 12px -5px rgba(255, 192, 203, 0.6);
    transform-style: preserve-3d;
    transform: rotateX(10deg) scale(90%);
    transition: transform 0.25s;
  }

  &.active {
    box-shadow: 12px 12px 12px -5px rgba(255, 192, 203, 0.6);
    transform-style: preserve-3d;
    transition: transform 0.25s;
    animation: ${pressAnimation} 0.25s ease-in;
    animation-fill-mode: forwards;
  }
`;

export default function Keycap({
  children,
  size = 75,
  isPressed = false,
  onClick,
}: Props) {
  const [canChangeColor, setChangeColor] = useState(true);
  const keySize = () => {
    if (typeof size === "number") {
      return {
        width: size,
        height: size,
      };
    }
    return size;
  };

  return (
    <StyledKey
      $width={keySize()?.width}
      $height={keySize()?.height}
      className={isPressed ? "active" : ""}
      onClick={onClick}
    >
      {children}
    </StyledKey>
  );
}
