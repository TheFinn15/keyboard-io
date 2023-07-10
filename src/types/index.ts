export interface Size {
  width: number;
  height: number;
}

export interface KeyboardKey {
  id: string;
  text: string;
  keyName: string;
  size?: Size;
  subText?: string;
  isPressed?: boolean;
}
