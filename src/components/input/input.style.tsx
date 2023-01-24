import { createThemedStyleSheet, Theme } from '../../theme';
import { selectStyles } from '../../utils/select-styles';
import { TypographyPresets } from 'etta-ui';

export const getTextFieldStyles = createThemedStyleSheet((theme) => ({
  container: {
    ...TypographyPresets.Body3,
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  container__state_default: {
    borderWidth: 1,
    color: theme.inputField.textDefault,
    borderColor: theme.inputField.borderDefault,
  },
  container__state_focused: {
    borderWidth: 2,
    color: theme.inputField.textDefault,
    borderColor: theme.inputField.borderFocused,
  },
  container__state_error: {
    borderWidth: 2,
    color: theme.inputField.textDefault,
    borderColor: theme.inputField.borderError,
  },
  container__state_disabled: {
    color: theme.inputField.textDisabled,
    backgroundColor: theme.inputField.backgroundDisabled,
  },
}));

export function getContainerStyle(options: {
  theme: Theme;
  isDisabled: boolean;
  isError: boolean;
  isFocused: boolean;
}) {
  let { isError, isFocused, isDisabled, theme } = options;
  const textFieldStyles = getTextFieldStyles(theme);
  return selectStyles(
    textFieldStyles,
    {
      isError,
      isFocused,
      isDisabled,
    },
    {
      container: true,
      container__state_default: {
        isError: false,
        isFocused: false,
        isDisabled: false,
      },
      container__state_focused: {
        isFocused: true,
        isDisabled: false,
      },
      container__state_error: {
        isError: true,
        isFocused: false,
        isDisabled: false,
      },
      container__state_disabled: {
        isDisabled: true,
      },
    }
  );
}
