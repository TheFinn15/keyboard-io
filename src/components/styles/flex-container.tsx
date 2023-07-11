import { styled } from "styled-components";
import React from "react";

interface Props {
  children: React.ReactNode;
  $gap?: string;
  $alignItems?: "flex-start" | "flex-end" | "center";
  $justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  $direction?: string;
}

const Container = styled.div<Props>`
  display: flex;
  align-items: ${(props) => props.$alignItems || "flex-start"};
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  gap: ${(props) => props.$gap || "1rem"};
  flex-direction: ${(props) => props.$direction || "row"};
`;

export default function FlexContainer({
  $gap,
  $alignItems,
  $justifyContent,
  children,
  $direction,
}: Props) {
  return (
    <Container
      $gap={$gap}
      $alignItems={$alignItems}
      $justifyContent={$justifyContent}
      $direction={$direction}
    >
      {children}
    </Container>
  );
}
