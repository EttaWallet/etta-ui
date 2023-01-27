import * as React from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import { useTheme } from 'etta-ui';
import { getMnemonicBoxStyles } from './mnemonic-box.style';

export enum RecoveryPhraseContainerMode {
  READONLY = 'READONLY',
  INPUT = 'INPUT',
}

export enum RecoveryPhraseType {
  BACKUP_KEY = 'BACKUP_KEY',
}

type MnemonicBoxProps = {
  value: string | null;
  mode: RecoveryPhraseContainerMode;
  type: RecoveryPhraseType;
  index?: number;
  showCopy?: boolean;
  style?: ViewStyle;
  onChangeText?: (value: string) => void;
  includeHeader?: boolean;
  header: string | null;
};

const MnemonicBoxComponent = ({
  value: words,
  mode,
  style,
  type,
  includeHeader,
  onChangeText,
  header,
}: MnemonicBoxProps) => {
  const onPhraseInputChange = (value: string) => {
    if (onChangeText) {
      onChangeText(value);
    }
  };
  const theme = useTheme();
  const styles = getMnemonicBoxStyles(theme);
  return (
    <View style={style}>
      <View style={styles.headerContainer}>
        {type === RecoveryPhraseType.BACKUP_KEY && includeHeader !== false && (
          <View style={styles.writeDownKeyContainer}>
            <Text style={styles.writeDownKey}>{header}</Text>
          </View>
        )}
      </View>
      {mode === RecoveryPhraseContainerMode.READONLY && (
        /* @TODO: Convert this container into a well number list of words in 2 columns and 6 rows */
        <View style={styles.phraseContainer}>
          {!!words && <Text style={styles.phraseText}>{words}</Text>}
        </View>
      )}
      {mode === RecoveryPhraseContainerMode.INPUT && (
        <View style={styles.phraseContainer}>
          <TextInput
            style={[styles.phraseInputText]}
            value={words || ''}
            placeholder="Seed words"
            onChangeText={onPhraseInputChange}
            underlineColorAndroid="transparent"
            placeholderTextColor="#777777"
            enablesReturnKeyAutomatically={true}
            multiline={true}
            autoCorrect={false}
            autoCapitalize={'none'}
          />
        </View>
      )}
    </View>
  );
};

export const MnemonicBox = React.memo(MnemonicBoxComponent);
