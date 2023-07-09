import { KeyboardKey } from "../types";

// TODO: maybe need to use Enum for each of keys below
// TODO: or use as id of keys - keyCode value from https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
const keys: KeyboardKey[][] = [
  [
    {
      id: "1",
      text: "Esc",
    },
    {
      id: "2",
      text: "F1",
    },
    {
      id: "3",
      text: "F2",
    },
    {
      id: "4",
      text: "F3",
    },
    {
      id: "5",
      text: "F4",
    },
    {
      id: "6",
      text: "F5",
    },
    {
      id: "7",
      text: "F6",
    },
    {
      id: "8",
      text: "F7",
    },
    {
      id: "9",
      text: "F8",
    },
    {
      id: "10",
      text: "F9",
    },
    {
      id: "11",
      text: "F10",
    },
    {
      id: "12",
      text: "F11",
    },
    {
      id: "13",
      text: "F12",
    },
    {
      id: "14",
      text: "PrtSc",
    },
    {
      id: "15",
      text: "Pause",
    },
    {
      id: "16",
      text: "Del",
    },
  ],
  [
    {
      id: "17",
      text: "`",
      subText: "~",
    },
    {
      id: "18",
      text: "1",
      subText: "!",
    },
    {
      id: "19",
      text: "2",
      subText: "@",
    },
    {
      id: "20",
      text: "3",
      subText: "#",
    },
    {
      id: "21",
      text: "4",
      subText: "$",
    },
    {
      id: "22",
      text: "5",
      subText: "%",
    },
    {
      id: "23",
      text: "6",
      subText: "^",
    },
    {
      id: "24",
      text: "7",
      subText: "&",
    },
    {
      id: "25",
      text: "8",
      subText: "*",
    },
    {
      id: "26",
      text: "9",
      subText: "(",
    },
    {
      id: "27",
      text: "0",
      subText: ")",
    },
    {
      id: "28",
      text: "-",
      subText: "",
    },
    {
      id: "29",
      text: "=",
      subText: "+",
    },
    {
      id: "30",
      text: "Backspace",
      size: {
        width: 158,
        height: 75,
      },
    },
    {
      id: "31",
      text: "Home",
    },
  ],
  [
    {
      id: "32",
      text: "Tab",
      size: {
        width: 110,
        height: 75,
      },
    },
    {
      id: "33",
      text: "Q",
    },
    {
      id: "34",
      text: "W",
    },
    {
      id: "35",
      text: "E",
    },
    {
      id: "36",
      text: "R",
    },
    {
      id: "37",
      text: "T",
    },
    {
      id: "38",
      text: "Y",
    },
    {
      id: "39",
      text: "Y",
    },
    {
      id: "40",
      text: "U",
    },
    {
      id: "41",
      text: "I",
    },
    {
      id: "42",
      text: "O",
    },
    {
      id: "43",
      text: "P",
    },
    {
      id: "44",
      text: "[",
      subText: "{",
    },
    {
      id: "45",
      text: "}",
      subText: "]",
    },
    {
      id: "46",
      text: "\\ |",
      size: {
        width: 123,
        height: 75,
      },
    },
    {
      id: "47",
      text: "End",
    },
  ],
  [
    {
      id: "48",
      text: "CapsLock",
      size: {
        width: 133,
        height: 75,
      },
    },
    {
      id: "49",
      text: "A",
    },
    {
      id: "50",
      text: "S",
    },
    {
      id: "51",
      text: "D",
    },
    {
      id: "52",
      text: "F",
    },
    {
      id: "53",
      text: "G",
    },
    {
      id: "54",
      text: "H",
    },
    {
      id: "55",
      text: "J",
    },
    {
      id: "56",
      text: "K",
    },
    {
      id: "57",
      text: "L",
    },
    {
      id: "58",
      text: ";",
      subText: ":",
    },
    {
      id: "59",
      text: "'",
      subText: '"',
    },
    {
      id: "60",
      text: "Enter",
      size: {
        width: 183,
        height: 75,
      },
    },
    {
      id: "61",
      text: "PgUp",
    },
  ],
  [
    {
      id: "62",
      text: "Shift",
      size: {
        width: 150,
        height: 75,
      },
    },
    {
      id: "63",
      text: "Z",
    },
    {
      id: "64",
      text: "X",
    },
    {
      id: "65",
      text: "C",
    },
    {
      id: "66",
      text: "V",
    },
    {
      id: "67",
      text: "B",
    },
    {
      id: "68",
      text: "N",
    },
    {
      id: "69",
      text: "M",
    },
    {
      id: "70",
      text: ",",
      subText: "<",
    },
    {
      id: "71",
      text: ".",
      subText: ">",
    },
    {
      id: "72",
      text: "/",
      subText: "?",
    },
    {
      id: "73",
      text: "Shift",
      size: {
        width: 166,
        height: 75,
      },
    },
    {
      id: "74",
      text: "↑",
    },
    {
      id: "75",
      text: "PgDn",
    },
  ],
  [
    {
      id: "76",
      text: "Ctrl",
    },
    {
      id: "77",
      text: "Win",
      size: {
        width: 90,
        height: 75,
      },
    },
    {
      id: "78",
      text: "Alt",
      size: {
        width: 90,
        height: 75,
      },
    },
    {
      id: "79",
      text: " ",
      size: {
        width: 543,
        height: 75,
      },
    },
    {
      id: "80",
      text: "Alt",
    },
    {
      id: "81",
      text: "Fn",
    },
    {
      id: "82",
      text: "Ctrl",
    },
    {
      id: "83",
      text: "←",
    },
    {
      id: "84",
      text: "↓",
    },
    {
      id: "85",
      text: "→",
    },
  ],
];

export default keys;
