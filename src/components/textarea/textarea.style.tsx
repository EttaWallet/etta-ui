import { createThemedStyleSheet, Theme } from '../../theme';
import { selectStyles } from '../../utils/select-styles';
import { TypographyPresets } from 'etta-ui';

export const getTextAreaStyles = createThemedStyleSheet((theme) => ({
  container: {
    ...TypographyPresets.Body5,
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flex: 1,
    // Fixed height to increase surface area for input
    // to focus on press
    height: 100,
    textAlignVertical: 'top',
    alignSelf: 'stretch',
    ...TypographyPresets.Body3,
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
  const textAreaStyles = getTextAreaStyles(theme);
  return selectStyles(
    textAreaStyles,
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
