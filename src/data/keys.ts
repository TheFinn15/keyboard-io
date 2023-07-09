import { KeyboardKey } from "../types";

const keys: KeyboardKey[][] = [
  [
    "Esc",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "PrtSc",
    "Pause",
    "Del",
  ],
  [
    "` ~",
    "1 !",
    "2 @",
    "3 #",
    "4 $",
    "5 %",
    "6 ^",
    "7 &",
    "8 *",
    "9 (",
    "0 )",
    "-",
    "= +",
    {
      text: "Backspace",
      size: {
        width: 158,
        height: 75,
      },
    },
    "Home",
  ],
  [
    {
      text: "Tab",
      size: {
        width: 110,
        height: 75,
      },
    },
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[ {",
    "} ]",
    {
      text: "\\ |",
      size: {
        width: 123,
        height: 75,
      },
    },
    "End",
  ],
  [
    {
      text: "CapsLock",
      size: {
        width: 133,
        height: 75,
      },
    },
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "; :",
    "' \"",
    {
      text: "Enter",
      size: {
        width: 183,
        height: 75,
      },
    },
    "PgUp",
  ],
  [
    {
      text: "Shift",
      size: {
        width: 150,
        height: 75,
      },
    },
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    ", <",
    ". >",
    "/ ?",
    {
      text: "Shift",
      size: {
        width: 166,
        height: 75,
      },
    },
    "↑",
    "PgDn",
  ],
  [
    "Ctrl",
    {
      text: "Win",
      size: {
        width: 90,
        height: 75,
      },
    },
    {
      text: "Alt",
      size: {
        width: 90,
        height: 75,
      },
    },
    {
      text: "",
      size: {
        width: 543,
        height: 75,
      },
    },
    "Alt",
    "Fn",
    "Ctrl",
    "←",
    "↓",
    "→",
  ],
];

export default keys;
