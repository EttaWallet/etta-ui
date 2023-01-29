import React from 'react';
import { View, Text, Pressable } from 'react-native';
import type { ButtonsConfigType } from './types';
import { useTheme } from 'etta-ui';
import { getCarouselStyles } from './carousel.style';

const BottomButtons = ({
  onPressNext,
  onPressSkip,
  onFinish,
  buttonsConfig,
  currentIndex,
  dataLength,
}: {
  onPressNext: () => void;
  onPressSkip?: () => void;
  onFinish?: () => void;
  buttonsConfig?: ButtonsConfigType;
  currentIndex: number;
  dataLength: number;
}) => {
  const theme = useTheme();
  const styles = getCarouselStyles(theme);

  if (buttonsConfig?.disabled) {
    return null;
  }
  const { next, skip, done } = buttonsConfig || {};

  const isLastData = dataLength === currentIndex + 1;
  const endButton = isLastData ? done : next;
  const endButtonLabel = isLastData ? 'Done' : 'Next';

  return (
    <View style={styles.bottomButtonContainer}>
      <Pressable
        onPress={() => {
          if (isLastData) {
            if (onFinish) {
              onFinish();
            }
          } else {
            onPressNext();
          }
        }}
        style={[
          styles.bottomButton,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginTop: 10,
            backgroundColor: '#00000050',
            marginBottom: !skip?.disabled ? 10 : 0,
          },
          next?.buttonStyle,
        ]}
      >
        <Text style={[styles.bottomButtonText, next?.textStyle]}>
          {endButton?.label || endButtonLabel}
        </Text>
      </Pressable>
      {!skip?.disabled && onPressSkip && (
        <Pressable
          onPress={() => onPressSkip()}
          style={[styles.bottomButton, skip?.buttonStyle]}
        >
          <Text style={[styles.bottomButtonText, skip?.textStyle]}>
            {skip?.label || 'Skip'}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default BottomButtons;
