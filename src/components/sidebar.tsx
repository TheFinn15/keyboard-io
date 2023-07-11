import { styled } from "styled-components";
import React from "react";
import _ from "lodash";
import { CheckboxItem } from "@/types";
import colorPaletteIcon from "../assets/icons/color-palette.svg";
import defaultImage from "../assets/icons/default-image.svg";
import Checkbox from "./inputs/checkbox";
import Button from "./inputs/button";
import FlexContainer from "./styles/flex-container";

interface KeycapsActions {
  changeColor: boolean;
  changeImage: boolean;
}

interface SidebarSettings {
  keycaps: KeycapsActions;
}

interface State {
  checkboxes: CheckboxItem[];
  settings: SidebarSettings;
}

const StyledSidebar = styled.aside`
  border-radius: 8px;
  width: 250px;
  margin-top: 0.65rem;
  padding: 0.5rem;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  & .text-right {
    text-align: right;
  }
  & h3,
  & h4 {
    font-weight: 500;
  }
  & ul {
    list-style-type: none;
    margin-top: 1.25rem;

    & li.flexible {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;
    }
    & li.action-subtitle {
      margin-top: 1rem;
      font-size: 10pt;
    }
  }
`;

export default class Sidebar extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      settings: {
        keycaps: {
          changeColor: false,
          changeImage: false,
        },
      },
      checkboxes: [
        {
          name: "Brown",
        },
        {
          name: "Red",
        },
        {
          name: "Blue",
        },
      ],
    };
  }

  onIconClick(isChangeColor = false) {
    this.setState((prev) => {
      const cloned = _.cloneDeep(prev);
      const {
        settings: { keycaps },
      } = cloned;

      if (isChangeColor) {
        cloned.settings.keycaps.changeColor = !keycaps.changeColor;
        cloned.settings.keycaps.changeImage = false;
      } else {
        cloned.settings.keycaps.changeImage = !keycaps.changeImage;
        cloned.settings.keycaps.changeColor = false;
      }
      return cloned;
    });
  }

  get colorState() {
    const { settings } = this.state;
    return settings.keycaps.changeColor;
  }

  get changeImageState() {
    const { settings } = this.state;
    return settings.keycaps.changeImage;
  }

  get checkboxes() {
    const { checkboxes } = this.state;
    return checkboxes;
  }

  updateCheckbox(ind: number, checked: boolean) {
    this.setState((prevState) => {
      const cloned = _.cloneDeep(prevState.checkboxes);

      cloned[ind].checked = checked;

      return {
        checkboxes: cloned,
      };
    });
  }

  render() {
    return (
      <StyledSidebar>
        <h3 className="text-right">Settings</h3>
        <ul>
          <li className="flexible">
            <h4>Keycaps</h4>
            <FlexContainer>
              <Button onClick={() => this.onIconClick(true)}>
                <img
                  src={colorPaletteIcon}
                  alt="palette"
                  width="28"
                  height="28"
                  className="clickable"
                />
                <span>Color</span>
              </Button>
              <Button
                onClick={() => this.onIconClick()}
                hoverDirection="bottom"
              >
                <img
                  src={defaultImage}
                  alt="uploadImage"
                  width="28"
                  height="28"
                  className="clickable"
                />
                <span>Background</span>
              </Button>
            </FlexContainer>
          </li>
          <li className="action-subtitle">
            {this.colorState && "Hover on keycap which you want to change"}
            {this.changeImageState && ""}
          </li>
          {/* TODO: Need to decision how to display list of switches and his sounds */}
          {false && (
            <li>
              <Checkbox
                label="Switches"
                items={this.checkboxes}
                onChange={this.updateCheckbox}
                inlineStyle={false}
              />
            </li>
          )}
        </ul>
      </StyledSidebar>
    );
  }
}
