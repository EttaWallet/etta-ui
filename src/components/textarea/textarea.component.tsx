import type { TextInputProps } from 'react-native';
import { StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { getContainerStyle } from './textarea.style';
import { useTheme } from 'etta-ui';
import { useExtendCallback } from '../../utils/use-extend-callback';

interface TextAreaComponentProps extends TextInputProps {
  error?: boolean;
  comment: string;
  onCommentChange: (comment: string) => void;
  onBlur: () => void;
}

const MAX_COMMENT_LENGTH = 400;

const TextAreaComponent = React.forwardRef<TextInput, TextAreaComponentProps>(
  (props, ref) => {
    const {
      style,
      editable = true,
      error,
      onFocus,
      onBlur,
      onCommentChange,
      comment,
      ...textInputProps
    } = props;
    const theme = useTheme();
    const [isFocused, setFocused] = useState(false);

    const setFocus = useExtendCallback(() => setFocused(true), onFocus);
    const setBlur = useExtendCallback(() => setFocused(false), onBlur);

    const textAreaStyle = getContainerStyle({
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
        style={StyleSheet.compose(textAreaStyle, style)}
        editable={editable}
        onFocus={setFocus}
        focusable={!editable}
        selectTextOnFocus={!editable}
        onBlur={setBlur}
        autoFocus={false}
        multiline={true}
        maxLength={MAX_COMMENT_LENGTH}
        onChangeText={onCommentChange}
        value={comment}
        returnKeyType={'done'}
        blurOnSubmit={true}
        numberOfLines={5}
        {...textInputProps}
      />
    );
  }
);

export const TextArea = React.memo(TextAreaComponent);
