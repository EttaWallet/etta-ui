import React, { useEffect, useState, useRef } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  View,
  LayoutAnimation,
} from 'react-native';
import { useTheme, KeyPad } from 'etta-ui';
import { getPincodeStyles } from './pincode.style';

// How long the last entered digit is visible
const LAST_DIGIT_VISIBLE_INTERVAL = 1000; // 1secs

const PIN_LENGTH = 6;

interface Props {
  title?: string;
  changePin?: boolean;
  onBoardingSetPin?: boolean;
  verifyPin?: boolean;
  errorText?: string;
  maxLength?: number;
  pin: string;
  onChangePin: (pin: string) => void;
  onCompletePin: (pin: string) => void;
}

const PincodeComponent = ({
  title,
  errorText,
  maxLength = PIN_LENGTH,
  pin,
  onBoardingSetPin,
  verifyPin, // true during onboarding pin re-entry
  onChangePin,
  onCompletePin,
}: Props) => {
  const theme = useTheme();
  const styles = getPincodeStyles(theme);

  const onDigitPress = (digit: number) => {
    if (pin.length >= maxLength) {
      return;
    }

    const newPin = pin + digit;
    onChangePin(newPin);
  };

  const onBackspacePress = () => {
    onChangePin(pin.substring(0, pin.length - 1));
  };

  useEffect(() => {
    // Wait for next frame so we the user can see the last digit
    if (pin.length === maxLength) {
      requestAnimationFrame(() => onCompletePin(pin));
    }
  }, [maxLength, onCompletePin, pin]);

  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.spacer} />
      {!errorText && <Text style={styles.title}>{title || ' '}</Text>}
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
      {onBoardingSetPin && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.guidedOnboardingHeader}>
            {verifyPin
              ? 'Enter your PIN again to confirm'
              : 'Choose a 6 digit PIN you’ll remember'}
          </Text>
          <Text style={styles.guidedOnboardingCopy}>
            Your PIN secures your wallet.
          </Text>
        </ScrollView>
      )}
      <View style={styles.pincodeContainer}>
        <PincodeDisplay pinEntered={pin} maxLength={maxLength} />
      </View>
      <View style={styles.spacer} />
      <KeyPad onDigitPress={onDigitPress} onBackspacePress={onBackspacePress} />
    </View>
  );
};

interface PinDisplayProps {
  pinEntered: string;
  maxLength: number;
}

const PincodeDisplay = ({ pinEntered, maxLength }: PinDisplayProps) => {
  const [revealIndex, setRevealIndex] = useState(-1);
  const prevPinRef = useRef(pinEntered);

  const theme = useTheme();
  const styles = getPincodeStyles(theme);

  useEffect(() => {
    const prevPin = prevPinRef.current;
    prevPinRef.current = pinEntered;

    // Check if pin length is smaller, so as not to reveal previous digits
    // when deleting
    if (pinEntered.length < prevPin.length) {
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.easeInEaseOut,
        duration: 150,
      });
      setRevealIndex(-1);
      return;
    }

    setRevealIndex(pinEntered.length - 1);
    const timeout = setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setRevealIndex(-1);
    }, LAST_DIGIT_VISIBLE_INTERVAL);

    return () => {
      clearTimeout(timeout);
    };
  }, [pinEntered]);

  return (
    <View style={styles.displayContainer}>
      {Array.from({ length: maxLength }).map((x, index) => {
        const char = index === revealIndex ? pinEntered[index] : undefined;
        const isEntered = index < pinEntered.length;
        const key = `${index}_${isEntered}_${char}`;

        return (
          <View key={key} style={styles.inputContainer}>
            {char ? (
              <Text allowFontScaling={false} style={styles.char}>
                {char}
              </Text>
            ) : (
              <View style={[styles.dot, isEntered && styles.dotFilled]} />
            )}
          </View>
        );
      })}
    </View>
  );
};
export const Pincode = React.memo(PincodeComponent);
