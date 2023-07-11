import { styled } from "styled-components";
import React, { createRef } from "react";
import _ from "lodash";
import Keycap from "./keycap";
import keys from "../data/keys";
import { KeyboardKey } from "@/types";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-top: 0.5rem;
  //perspective: 300px;
`;

// TODO: need to add more styles for beautiful view
const Container = styled.div`
  outline: none;
  user-select: none;
  //min-height: 100vh;
  //&::before {
  //  content: "";
  //  position: absolute;
  //  top: 10px;
  //  left: 60px;
  //  border: 0.5px solid red;
  //  border-radius: 8px;
  //  width: 1380px;
  //  height: 520px;
  //}
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 1.25rem;
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
      <>
        <Navbar />
        <CenteredContainer>
          <Sidebar />
          <div>
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
                      <Keycap
                        size={col.size}
                        key={col.id}
                        isPressed={col.isPressed}
                        onClick={() => this.doKeyboardFocus()}
                      >
                        {col.text} {col.subText}
                      </Keycap>
                    );
                  })}
                </Row>
              ))}
            </Container>
          </div>
        </CenteredContainer>
      </>
    );
  }
}
