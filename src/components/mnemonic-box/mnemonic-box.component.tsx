import * as React from 'react';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import BigList from 'react-native-big-list';
import { ListItem, useTheme } from 'etta-ui';
import { getMnemonicBoxStyles } from './mnemonic-box.style';

export enum RecoveryPhraseContainerMode {
  READONLY = 'READONLY',
  INPUT = 'INPUT',
}

type MnemonicBoxProps = {
  value: string | null;
  mode: RecoveryPhraseContainerMode;
  index?: number;
  showCopy?: boolean;
  style?: ViewStyle;
  onChangeText?: (value: string) => void;
};

const MnemonicBoxComponent = ({
  value: words,
  mode,
  style,
  onChangeText,
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
