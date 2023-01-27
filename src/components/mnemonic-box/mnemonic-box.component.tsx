import * as React from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import BigList from 'react-native-big-list';
import { ListItem, useTheme } from 'etta-ui';
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
  const mnemonicArray = words?.split(' '); // split the string of mnemonics into words.

  // how each word in seed will be rendered
  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <ListItem key={index}>
      <View style={styles.phraseWrapper}>
        <Text style={styles.phraseIndex}>{index + 1}.</Text>
        <Text style={styles.phraseText}>{item}</Text>
      </View>
    </ListItem>
  );
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
        <BigList
          data={mnemonicArray}
          numColumns={2}
          renderItem={renderItem}
          itemHeight={50}
        />
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
