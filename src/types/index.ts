export interface Size {
  width: number;
  height: number;
}

export interface KeyboardKey {
  id: string;
  size?: Size;
  text: string;
  subText?: string;
  isPressed?: boolean;
}
