import { styled } from "styled-components";
import React from "react";
import { Size } from "../types";

interface Props {
  children: React.ReactNode;
  size?: Size | number;
}

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
  perspective-origin: 0 50%;
  perspective: 1000px;

  &:hover {
    outline: thin solid hotpink;
  }

  &:active {
    box-shadow: 5px 5px 20px 0px rgba(255, 192, 203, 0.6);
  }
`;

export default function Key({ children, size = 75 }: Props) {
  const keySize = () => {
    if (typeof size === "number") {
      return {
        width: size,
        height: size,
      };
    }
    return size;
  };

  console.log(keySize(), size);

  return (
    <StyledKey $width={keySize()?.width} $height={keySize()?.height}>
      {children}
    </StyledKey>
  );
}
