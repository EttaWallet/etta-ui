import * as React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Icon } from 'etta-ui';
import { getKeyPadStyles } from './keypad.style';
import { useTheme } from 'etta-ui';

interface Props {
  onDigitPress: (digit: number) => void;
  onBackspacePress: () => void;
  onDecimalPress?: () => void;
  onBackspaceLongPress?: () => void;
  decimalSeparator?: string;
}

const DigitButton = ({
  digit,
  onDigitPress,
}: {
  digit: number;
  onDigitPress: (digit: number) => void;
}) => {
  const theme = useTheme();
  const styles = getKeyPadStyles(theme);
  const onPress = () => onDigitPress(digit);
  return (
    <BorderlessButton borderless={true} onPress={onPress}>
      <Text allowFontScaling={false} style={styles.digit}>
        {digit}
      </Text>
    </BorderlessButton>
  );
};

const NumericKeypad = (props: Props) => {
  const theme = useTheme();
  const styles = getKeyPadStyles(theme);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <DigitButton digit={1} onDigitPress={props.onDigitPress} />
        <DigitButton digit={2} onDigitPress={props.onDigitPress} />
        <DigitButton digit={3} onDigitPress={props.onDigitPress} />
      </View>
      <View style={styles.row}>
        <DigitButton digit={4} onDigitPress={props.onDigitPress} />
        <DigitButton digit={5} onDigitPress={props.onDigitPress} />
        <DigitButton digit={6} onDigitPress={props.onDigitPress} />
      </View>
      <View style={styles.row}>
        <DigitButton digit={7} onDigitPress={props.onDigitPress} />
        <DigitButton digit={8} onDigitPress={props.onDigitPress} />
        <DigitButton digit={9} onDigitPress={props.onDigitPress} />
      </View>
      <View style={styles.row}>
        {props.decimalSeparator && props.onDecimalPress ? (
          <BorderlessButton borderless={true} onPress={props.onDecimalPress}>
            <Text style={styles.digit}>{props.decimalSeparator}</Text>
          </BorderlessButton>
        ) : (
          <View style={styles.digit} />
        )}
        <DigitButton digit={0} onDigitPress={props.onDigitPress} />
        <BorderlessButton
          borderless={true}
          onPress={props.onBackspacePress}
          onLongPress={props.onBackspaceLongPress}
        >
          <View style={styles.digit}>
            <Icon name="icon-arrow-left" />
          </View>
        </BorderlessButton>
      </View>
    </View>
  );
};

export const KeyPad = React.memo(NumericKeypad);
