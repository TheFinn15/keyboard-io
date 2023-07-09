export interface Size {
  width: number;
  height: number;
}

export interface KeyboardKeyOpts {
  size?: Size;
  text: string;
}

export type KeyboardKey = KeyboardKeyOpts | string;
