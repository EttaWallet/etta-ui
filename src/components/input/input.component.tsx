import type { TextInputProps } from 'react-native';
import { StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { getContainerStyle } from './input.style';
import { useTheme } from 'etta-ui';
import { useExtendCallback } from '../../utils/use-extend-callback';

interface InputFieldComponentProps extends TextInputProps {
  error?: boolean;
}

const InputFieldComponent = React.forwardRef<
  TextInput,
  InputFieldComponentProps
>((props, ref) => {
  const {
    style,
    editable = true,
    error,
    onFocus,
    onBlur,
    ...textInputProps
  } = props;
  const theme = useTheme();
  const [isFocused, setFocused] = useState(false);

  const setFocus = useExtendCallback(() => setFocused(true), onFocus);
  const setBlur = useExtendCallback(() => setFocused(false), onBlur);

  const textInputStyle = getContainerStyle({
    theme,
    isFocused,
    isDisabled: !editable,
    isError: !!error,
  });

  return (
    <TextInput
      ref={ref}
      placeholderTextColor={
        editable
          ? theme.inputField.textPlaceholder
          : theme.inputField.textDisabled
      }
      style={StyleSheet.compose(textInputStyle, style)}
      editable={editable}
      onFocus={setFocus}
      focusable={!editable}
      selectTextOnFocus={!editable}
      onBlur={setBlur}
      {...textInputProps}
    />
  );
});

export const InputField = React.memo(InputFieldComponent);
