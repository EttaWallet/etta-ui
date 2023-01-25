import type { Theme } from '../theme.types';
import { buttonTheme } from './buttons';
import { inputFieldTheme } from './inputs';
import { Colors } from '../colors';

export let DARK_THEME: Theme = {
  type: 'dark',
  buttons: buttonTheme,
  inputField: inputFieldTheme,
  background: {
    base: Colors.common.black,
  },
  text: {
    base: Colors.common.white,
  },
  switch: {
    trackColor: {
      false: Colors.neutrals.light.neutral4,
      true: Colors.orange.base,
    },
    thumbColor: Colors.neutrals.light.neutral3,
    ios_backgroundColor: Colors.neutrals.light.neutral4,
  },
};
