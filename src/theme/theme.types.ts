import type { ColorValue } from 'react-native';

interface ButtonStateColors {
  default: string;
  pressed: string;
  disabled: string;
}

export interface ButtonBackgroundAndTextTheme {
  background: ButtonStateColors;
  border: ButtonStateColors;
  text: ButtonStateColors;
}

export interface ButtonTheme {
  filled: ButtonBackgroundAndTextTheme;
  outline: ButtonBackgroundAndTextTheme;
  transparent: ButtonBackgroundAndTextTheme;
}

export interface InputFieldTheme {
  borderDefault: ColorValue;
  borderFocused: string;
  borderError: string;
  textPlaceholder: string;
  textDisabled: string;
  textDefault: string;
  backgroundDisabled: string;
}

export interface BackgroundTheme {
  base: string;
}

export interface TextTheme {
  base: string;
}

export interface Theme {
  type: 'dark' | 'light' | string;
  buttons: ButtonTheme;
  inputField: InputFieldTheme;
  background: BackgroundTheme;
  text: TextTheme;
}
export interface DefaultExtendedTheme {}
export type ExtendedTheme<T = DefaultExtendedTheme> = T & Theme;
