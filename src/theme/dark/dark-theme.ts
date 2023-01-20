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
};
