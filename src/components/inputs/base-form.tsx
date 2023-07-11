import { css, styled } from "styled-components";
import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
  flexible?: boolean;
}

const StyledForm = styled.fieldset<{ $flex?: boolean }>`
  border: none;
  margin-inline: 0;
  padding-inline: 0;
  padding-block: 0;

  ${(props) => {
    return props.$flex
      ? css`
          & div {
            display: flex;
            flex-direction: column;
          }
        `
      : "";
  }}

  & legend {
    padding-inline: 0;
    border: none;
  }
`;

export default function BaseForm({ label, children, flexible = false }: Props) {
  return (
    <StyledForm $flex={flexible}>
      <legend>{label}</legend>
      <div>{children}</div>
    </StyledForm>
  );
}
