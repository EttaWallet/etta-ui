import React from 'react';
import { View, Text, Pressable, ViewStyle, TextStyle } from 'react-native';
import type { ButtonsConfigType } from './types';
import { useTheme } from 'etta-ui';
import { getCarouselStyles } from './carousel.style';

const Button = ({
  onPress,
  title,
  buttonStyle,
  textStyle,
  disabled,
}: {
  onPress: () => void;
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}) => {
  const theme = useTheme();
  const styles = getCarouselStyles(theme);

  if (disabled) {
    return null;
  }
  return (
    <Pressable
      onPress={() => onPress()}
      style={[styles.buttonItem, buttonStyle]}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const ButtonsScreen = ({
  buttonsConfig,
  currentIndex,
  maxPaginationSize,
  dataLength,
  onChangeSlider,
  onFinish,
}: {
  buttonsConfig?: ButtonsConfigType;
  currentIndex: number;
  maxPaginationSize: number;
  dataLength: number;
  onChangeSlider: (page: number) => void;
  onFinish?: () => void;
}) => {
  const { next, prev, done } = buttonsConfig || {};

  const isLastData = dataLength === currentIndex + 1;
  const endButton = isLastData ? done : next;
  const endButtonLabel = isLastData ? 'Done' : 'Next';

  const theme = useTheme();
  const styles = getCarouselStyles(theme);

  return (
    <>
      <View style={[styles.buttonContainer]}>
        <View style={styles.buttonContent}>
          {currentIndex !== 0 && (
            <>
              {!buttonsConfig?.prev?.renderButton ? (
                <Button
                  title={prev?.label || 'Prev'}
                  onPress={() => onChangeSlider(currentIndex - 1)}
                  textStyle={prev?.textStyle}
                  buttonStyle={prev?.buttonStyle}
                  disabled={prev?.disabled}
                />
              ) : (
                buttonsConfig?.prev?.renderButton(currentIndex, onChangeSlider)
              )}
            </>
          )}
        </View>
        <View style={{ width: maxPaginationSize }} />
        <View style={styles.buttonContent}>
          {!endButton?.renderButton ? (
            <Button
              title={endButton?.label || endButtonLabel}
              textStyle={endButton?.textStyle}
              buttonStyle={endButton?.buttonStyle}
              onPress={() => {
                if (isLastData) {
                  if (onFinish) {
                    onFinish();
                  }
                } else {
                  onChangeSlider(currentIndex + 1);
                }
              }}
            />
          ) : (
            endButton?.renderButton(currentIndex, onChangeSlider)
          )}
        </View>
      </View>
    </>
  );
};

export { Button };
export default ButtonsScreen;
