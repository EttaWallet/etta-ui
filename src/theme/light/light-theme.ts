import type { Theme } from '../theme.types';
import { buttonTheme } from './buttons';
import { inputFieldTheme } from './inputs';
import { Colors } from '../colors';

export let LIGHT_THEME: Theme = {
  type: 'light',
  buttons: buttonTheme,
  inputField: inputFieldTheme,
  background: {
    base: Colors.common.white,
  },
  text: {
    base: Colors.common.black,
  },
  switch: {
    trackColor: {
      false: Colors.neutrals.light.neutral4,
      true: Colors.orange.base,
    },
    thumbColor: Colors.neutrals.light.neutral3,
    ios_backgroundColor: Colors.neutrals.light.neutral4,
  },
  chip: {
    borderColor: Colors.neutrals.light.neutral5,
    background: Colors.common.white,
    text: Colors.common.black,
    selectedBackground: Colors.neutrals.light.neutral6,
    selectedText: Colors.common.white,
    selectedBorderColor: Colors.neutrals.light.neutral6,
  },
  keypad: {
    digitColor: Colors.common.black,
    backspaceColor: Colors.red.base,
  },
  pagination: {
    backgroundDefault: Colors.neutrals.light.neutral4,
    backgroundSelected: Colors.orange.base,
  },
  modal: {
    background: Colors.common.white,
    textMessage: Colors.neutrals.light.neutral7,
    textTitle: Colors.common.black,
  },
  listItem: {
    background: Colors.common.white,
    bottomBorderColor: Colors.neutrals.light.neutral4,
  },
  settingsItem: {
    titleColor: Colors.common.black,
    valueColor: Colors.neutrals.light.neutral8,
    valueActionableColor: Colors.orange.base,
    detailsColor: Colors.neutrals.light.neutral7,
  },
  mnemonicBox: {
    containerBackground: Colors.neutrals.light.neutral3,
    containerBorderColor: Colors.neutrals.light.neutral3,
  },
  mnemonicQuiz: {
    containerBackground: Colors.common.white,
    chosenWordsBackground: Colors.neutrals.light.neutral2,
    chosenWordsBorder: Colors.neutrals.light.neutral2,
    chosenWordsFilledBackground: Colors.blue.light,
    chosenWordColor: Colors.common.black,
    chosenWordFilledColor: Colors.common.white,
    textColor: Colors.common.black,
  },
};
