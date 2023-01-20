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
};
