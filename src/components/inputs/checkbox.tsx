import { styled } from "styled-components";
import React, { ChangeEvent } from "react";
import BaseForm from "./base-form";
import { CheckboxItem } from "@/types";

interface Props {
  inlineStyle?: boolean;
  label: string;
  onChange?: (ind: number, isChecked: boolean) => void;
  items: CheckboxItem[];
}

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  color: pink;
  margin: 0 0.25rem 0 0;
  padding: 0;
`;

export default function Checkbox({
  items,
  label,
  onChange,
  inlineStyle = true,
}: Props) {
  return (
    <BaseForm label={label} flexible={!inlineStyle}>
      {items.map((item, ind) => {
        return (
          <label htmlFor={`${item.name}-${ind}`} key={item.name}>
            <StyledCheckbox
              id={`${item.name}-${ind}`}
              checked={item.checked}
              onChange={(ev: ChangeEvent<HTMLInputElement>) =>
                onChange ? onChange(ind, ev.target.checked) : undefined
              }
            />
            {item.name}
          </label>
        );
      })}
    </BaseForm>
  );
}
