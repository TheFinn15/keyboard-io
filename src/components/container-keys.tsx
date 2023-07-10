import { styled } from "styled-components";
import React, { createRef } from "react";
import _ from "lodash";
import Key from "./Key";
import keys from "../data/keys";
import { KeyboardKey } from "@/types";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

// TODO: need to add more styles for beautiful view
const Container = styled.div`
  outline: none;
`;

export interface State {
  keys: KeyboardKey[][];
}

export default class ContainerKeys extends React.Component<any, State> {
  keyboardArea = createRef<HTMLDivElement | null>();

  constructor(props: any) {
    super(props);

    this.state = {
      keys,
    };

    this.handlePressDown = this.handlePressDown.bind(this);
    this.handlePressUp = this.handlePressUp.bind(this);
    this.doKeyboardFocus = this.doKeyboardFocus.bind(this);
  }

  componentDidMount() {
    this.doKeyboardFocus();
  }

  handlePressUp(ev: React.KeyboardEvent) {
    this.calculatePressKeys(ev.code, false);
    ev.preventDefault();
  }

  handlePressDown(ev: React.KeyboardEvent) {
    if (!this.isKeyPressed(ev.code)) this.calculatePressKeys(ev.code, true);
    ev.preventDefault();
  }

  isKeyPressed(key: string): boolean {
    const { keys: data } = this.state;

    return data.some(
      (row) => !!row.find((col) => col.keyName === key && !!col.isPressed),
    );
  }

  doKeyboardFocus() {
    this.keyboardArea.current?.focus();
  }

  calculatePressKeys(key: string, isPress = false) {
    this.setState((prevState) => {
      const cloneKeys = _.cloneDeep(prevState.keys);

      const positions = cloneKeys
        .flatMap((row, rowInd) =>
          row.map((col, colInd) => {
            if (col.keyName === key) {
              return [rowInd, colInd];
            }
            return null;
          }),
        )
        .find((item) => item !== null);

      if (positions && positions.length) {
        const [rowInd, colInd] = positions;
        cloneKeys[rowInd][colInd] = {
          ...cloneKeys[rowInd][colInd],
          isPressed: isPress,
        };
      }

      return {
        keys: cloneKeys,
      };
    });
  }

  render() {
    const { keys: data } = this.state;
    return (
      <Container
        ref={this.keyboardArea as React.RefObject<HTMLDivElement>}
        tabIndex={0}
        role="textbox"
        onKeyUp={this.handlePressUp}
        onKeyDown={this.handlePressDown}
      >
        {data.map((row) => (
          <Row key={Math.floor(Math.random() * 10000)}>
            {row.map((col) => {
              return (
                <Key
                  size={col.size}
                  key={col.id}
                  isPressed={col.isPressed}
                  onClick={() => this.doKeyboardFocus()}
                >
                  {col.text} {col.subText}
                </Key>
              );
            })}
          </Row>
        ))}
      </Container>
    );
  }
}
