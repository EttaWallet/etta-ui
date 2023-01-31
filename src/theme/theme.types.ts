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

export interface SwitchTheme {
  trackColor: object;
  thumbColor: string;
  ios_backgroundColor: string;
}

export interface ChipTheme {
  borderColor: string;
  background: string;
  text: string;
  selectedBorderColor: string;
  selectedBackground: string;
  selectedText: string;
}

export interface KeyPadTheme {
  digitColor: string;
  backspaceColor: string;
}

export interface PaginationTheme {
  backgroundDefault: string;
  backgroundSelected: string;
}

export interface ModalTheme {
  background: string;
  textTitle: string;
  textMessage: string;
}

export interface ListItemTheme {
  background: string;
  bottomBorderColor: string;
}

export interface SettingsItemTheme {
  titleColor: string;
  valueColor: string;
  valueActionableColor: string;
  detailsColor: string;
}

export interface MnemonicBoxTheme {
  containerBackground: string;
  containerBorderColor: string;
}

export interface MnemonicQuizTheme {
  containerBackground: string;
  chosenWordsBackground: string;
  chosenWordsBorder: string;
  chosenWordsFilledBackground: string;
  chosenWordColor: string;
  chosenWordFilledColor: string;
  textColor: string;
}

export interface PinCodeTheme {
  dotBorderColor: string;
  dotBackgroundColor: string;
  errorColor: string;
}

export interface CarouselTheme {
  bodyTextColor: string;
  bodyIconColor: string;
}

export interface HomeButtonTheme {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
}

export interface Theme {
  type: 'dark' | 'light' | string;
  buttons: ButtonTheme;
  inputField: InputFieldTheme;
  background: BackgroundTheme;
  text: TextTheme;
  switch: SwitchTheme;
  chip: ChipTheme;
  keypad: KeyPadTheme;
  pagination: PaginationTheme;
  modal: ModalTheme;
  listItem: ListItemTheme;
  settingsItem: SettingsItemTheme;
  mnemonicBox: MnemonicBoxTheme;
  mnemonicQuiz: MnemonicQuizTheme;
  pincode: PinCodeTheme;
  carousel: CarouselTheme;
  homeButton: HomeButtonTheme;
}
export interface DefaultExtendedTheme {}
export type ExtendedTheme<T = DefaultExtendedTheme> = T & Theme;
