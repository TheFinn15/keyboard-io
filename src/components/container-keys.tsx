import { styled } from "styled-components";
import React, { createRef } from "react";
import Key from "./Key";
import keys from "../data/keys";
import { KeyboardKey } from "@/types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export interface State {
  keys: KeyboardKey[][];
}

export default class ContainerKeys extends React.Component<any, State> {
  keyboardArea = createRef<HTMLDivElement | null>();

  static getCorrectKeyName(ev: React.KeyboardEvent): string {
    if (/Escape|Digit|Right|Left/gim.test(ev.code)) return ev.code;
    return ev.key;
  }

  constructor(props: any) {
    super(props);

    this.state = {
      keys,
    };

    this.handlePressDown = this.handlePressDown.bind(this);
    this.handlePressUp = this.handlePressUp.bind(this);
  }

  componentDidMount() {
    this.keyboardArea.current?.focus();
  }

  handlePressUp(ev: React.KeyboardEvent) {
    this.calculatePressKeys(ContainerKeys.getCorrectKeyName(ev), false);
    ev.preventDefault();
  }

  handlePressDown(ev: React.KeyboardEvent) {
    this.calculatePressKeys(ContainerKeys.getCorrectKeyName(ev), true);
    ev.preventDefault();
  }

  calculatePressKeys(key: string, isPress = false) {
    const { keys: data } = this.state;
    const pressedKey = key.includes("Escape")
      ? "Esc"
      : key.replace("Digit", "");
    const cloneKeys = structuredClone(data);

    const haveMultipleKeys = /Right|Left/gim.test(pressedKey);
    // take left by default because left is first index of result
    const isLeftKey = haveMultipleKeys ? pressedKey.includes("Left") : true;
    const [leftRes, rightRes] = cloneKeys
      .flatMap((row, rowInd) =>
        row.map((col, colInd) => {
          if (
            col.text.toLowerCase() ===
            pressedKey.replace(/Right|Left/gim, "").toLowerCase()
          ) {
            return [rowInd, colInd];
          }
          return null;
        }),
      )
      .filter((item) => item !== null) as number[][];
    const [rowInd, colInd] = isLeftKey ? leftRes : rightRes;
    const currentKey = cloneKeys[rowInd][colInd];
    cloneKeys[rowInd][colInd] = {
      ...currentKey,
      isPressed: isPress,
    };
    this.setState({
      keys: cloneKeys,
    });
  }

  render() {
    const { keys: data } = this.state;
    return (
      <div
        ref={this.keyboardArea as React.RefObject<HTMLDivElement>}
        tabIndex={0}
        role="textbox"
        onKeyUp={this.handlePressUp}
        onKeyDown={this.handlePressDown}
      >
        {data.map((row) => (
          <Container key={Math.floor(Math.random() * 10000)}>
            {row.map((col) => {
              return (
                <Key size={col.size} key={col.id} isPressed={col.isPressed}>
                  {col.text} {col.subText}
                </Key>
              );
            })}
          </Container>
        ))}
      </div>
    );
  }
}
