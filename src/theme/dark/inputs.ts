import type { InputFieldTheme } from '../theme.types';
import { Colors } from '../colors';

export const inputFieldTheme: InputFieldTheme = {
  borderDefault: Colors.neutrals.light.neutral3,
  borderFocused: Colors.neutrals.light.neutral3,
  borderError: Colors.red.base,
  textDefault: Colors.neutrals.light.neutral5,
  textPlaceholder: Colors.common.black,
  textDisabled: Colors.neutrals.light.neutral5,
  backgroundDisabled: Colors.neutrals.light.neutral3,
} as const;
