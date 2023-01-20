import type { ButtonTheme } from '../theme.types';
import { Colors } from '../colors';

export const buttonTheme: ButtonTheme = {
  filled: {
    background: {
      default: Colors.orange.base,
      pressed: Colors.orange.dark,
      disabled: Colors.neutrals.light.neutral4,
    },
    border: {
      default: Colors.orange.base,
      pressed: Colors.orange.dark,
      disabled: Colors.neutrals.light.neutral4,
    },
    text: {
      default: Colors.common.white,
      pressed: Colors.neutrals.light.neutral1,
      disabled: Colors.neutrals.light.neutral2,
    },
  },
  outline: {
    background: {
      default: Colors.common.white,
      pressed: Colors.common.white,
      disabled: Colors.common.white,
    },
    border: {
      default: Colors.neutrals.light.neutral4,
      pressed: Colors.neutrals.light.neutral5,
      disabled: Colors.neutrals.light.neutral4,
    },
    text: {
      default: Colors.neutrals.light.neutral4,
      pressed: Colors.neutrals.light.neutral5,
      disabled: Colors.neutrals.light.neutral4,
    },
  },
  transparent: {
    background: {
      default: Colors.common.transparent,
      pressed: Colors.neutrals.light.neutral1,
      disabled: Colors.common.transparent,
    },
    border: {
      default: Colors.common.transparent,
      pressed: Colors.common.transparent,
      disabled: Colors.common.transparent,
    },
    text: {
      default: Colors.common.black,
      pressed: Colors.common.black,
      disabled: Colors.neutrals.light.neutral4,
    },
  },
};
