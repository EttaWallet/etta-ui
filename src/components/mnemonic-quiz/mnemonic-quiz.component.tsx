import React, { useState, useEffect } from 'react';
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { chunk, flatMap, shuffle, times } from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, Button, useTheme } from 'etta-ui';
import { getMnemonicQuizStyles } from './mnemonic-quiz.style';

export enum Mode {
  Entering,
  Checking,
  Failed,
}

type MnemonicQuizProps = {
  seed: string;
  resetTitle: string;
  onPassed: () => void;
  onFail: () => void;
  showError: any;
};

// miliseconds to wait until showing success or failure
const CHECKING_DURATION = 1.8 * 1000;

const MNEMONIC_BUTTONS_TO_DISPLAY = 4;

const getOrdinal = (n: number) => {
  let ord = 'th';

  if (n % 10 === 1 && n % 100 !== 11) {
    ord = 'st';
  } else if (n % 10 === 2 && n % 100 !== 12) {
    ord = 'nd';
  } else if (n % 10 === 3 && n % 100 !== 13) {
    ord = 'rd';
  }

  return ord;
};

const Ordinality = (index: number) => {
  const ordinal = getOrdinal(index);
  return (
    <Text>
      `What is the ${index}
      <sup>${ordinal}</sup> word?`
    </Text>
  );
};

const MnemonicQuizComponent = ({
  seed,
  resetTitle,
  onPassed,
  onFail,
}: MnemonicQuizProps) => {
  // set component init State
  const [mnemonicLength, setMnemonicLength] = useState(0);
  const [mnemonicWords, setMnemonicWords] = useState<string[]>([]);
  const [userChosenWords, setUserChosenWords] = useState<any>([]);
  const [mode, setMode] = useState(Mode.Entering);

  const setBackSpace = () => {
    const isVisible = userChosenWords.length > 0 && mode === Mode.Entering;

    <DeleteWord onPressBackspace={onPressBackspace} visible={isVisible} />;
  };

  // component did mount
  useEffect(() => {
    const retrieveMnemonic = async () => {
      if (seed) {
        const shuffledMnemonic = getShuffledWordSet(seed);
        setMnemonicWords(shuffledMnemonic);
        setMnemonicLength(shuffledMnemonic.length);
      } else {
        console.warn('Failed to get mnemonic');
      }
    };

    try {
      retrieveMnemonic();
    } catch (e) {
      console.log(e);
    }
  }, [seed]);

  const onPressMnemonicWord = (word: string, index: number) => {
    const mnemonicWordsUpdated = [...mnemonicWords];
    mnemonicWordsUpdated.splice(index, 1);

    const newUserChosenWords = [...userChosenWords, { word, index }];

    setMnemonicWords(mnemonicWordsUpdated);
    setUserChosenWords(newUserChosenWords);
  };

  const onPressBackspace = () => {
    if (!userChosenWords.length) {
      return;
    }

    const userChosenWordsUpdated = [...userChosenWords];
    const lastWord = userChosenWordsUpdated.pop();
    const mnemonicWordsUpdated = [...mnemonicWords];
    mnemonicWordsUpdated.splice(lastWord!.index, 0, lastWord!.word);

    setMnemonicWords(mnemonicWordsUpdated);
    setUserChosenWords(userChosenWordsUpdated);
  };

  const onPressReset = async () => {
    setMnemonicWords(getShuffledWordSet(seed));
    setUserChosenWords([]);
    setMode(Mode.Entering);
  };

  const afterCheck = async () => {
    const lengthsMatch = userChosenWords.length === mnemonicLength;
    if (lengthsMatch && contentMatches(userChosenWords, seed)) {
      console.info('Backup quiz passed');
      onPassed; // pass function runs
    } else {
      console.error('Backup quiz failed, reseting words');
      setMode(Mode.Failed);
      onFail; // fail function runs
    }
  };

  const onPressSubmit = () => {
    setMode(Mode.Checking);
    setTimeout(afterCheck, CHECKING_DURATION);
  };
  // grab component styles
  const theme = useTheme();
  const styles = getMnemonicQuizStyles(theme);

  const mnemonicWordButtons = mnemonicWords;
  const currentWordIndex = userChosenWords.length + 1;
  const isQuizComplete =
    userChosenWords.length === mnemonicLength && mnemonicLength !== 0;
  const mnemonicWordsToDisplay = mnemonicWordButtons.slice(
    0,
    MNEMONIC_BUTTONS_TO_DISPLAY
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.chosenWordsContainer}>
          {times(mnemonicLength, (i) => (
            <View
              style={[
                styles.chosenWordWrapper,
                userChosenWords[i] && styles.chosenWordWrapperFilled,
              ]}
              key={`selected-word-${i}`}
            >
              <Text
                style={
                  userChosenWords[i]
                    ? styles.chosenWordFilled
                    : styles.chosenWord
                }
              >
                {(userChosenWords[i] && userChosenWords[i].word) || i + 1}
              </Text>
            </View>
          ))}
        </View>
        {mode === Mode.Failed && (
          <View style={styles.resetButton}>
            <Button title={resetTitle} onPress={onPressReset} />
          </View>
        )}
        <View style={styles.bottomHalf}>
          {!isQuizComplete && (
            <Text style={styles.bodyText}>
              What is the {currentWordIndex}
              {getOrdinal(currentWordIndex)} word?
            </Text>
          )}
          <View style={styles.mnemonicButtonsContainer}>
            {mnemonicWordsToDisplay.map((word, index) => (
              <Word
                key={word}
                word={word}
                index={index}
                onPressWord={onPressMnemonicWord}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <QuizChecker
        onPressSubmit={onPressSubmit}
        isQuizComplete={isQuizComplete}
        mode={mode}
      />
    </SafeAreaView>
  );
};

interface WordProps {
  word: string;
  index: number;
  onPressWord: (word: string, index: number) => void;
}

const Word = React.memo(function _Word({
  word,
  index,
  onPressWord,
}: WordProps) {
  const onPressMnemonicWord = React.useCallback(() => {
    onPressWord(word, index);
  }, [word, index, onPressWord]);

  // grab component styles
  const theme = useTheme();
  const styles = getMnemonicQuizStyles(theme);

  return (
    <View
      key={'mnemonic-button-' + word}
      style={styles.mnemonicWordButtonOutterRim}
    >
      <TouchableOpacity
        style={styles.mnemonicWordButton}
        onPress={onPressMnemonicWord}
      >
        <Text style={styles.mnemonicWordButtonText}>{word}</Text>
      </TouchableOpacity>
    </View>
  );
});

interface Content {
  word: string;
  index: number;
}

function contentMatches(userChosenWords: Content[], mnemonic: string) {
  return userChosenWords.map((w) => w.word).join(' ') === mnemonic;
}

const DeleteWord = ({
  onPressBackspace,
  visible,
}: {
  onPressBackspace: () => void;
  visible: boolean;
}) => {
  // grab component styles
  const theme = useTheme();
  const styles = getMnemonicQuizStyles(theme);
  if (!visible) {
    return null;
  }
  return (
    <TouchableOpacity onPress={onPressBackspace} style={styles.backWord}>
      <Icon name="icon-clear-character" />
    </TouchableOpacity>
  );
};

function getShuffledWordSet(mnemonic: string) {
  return flatMap(
    chunk(mnemonic.split(' '), MNEMONIC_BUTTONS_TO_DISPLAY).map(
      (mnemonicChunk) => shuffle(mnemonicChunk)
    )
  );
}

interface CheckerProps {
  onPressSubmit: () => void;
  isQuizComplete: boolean;
  mode: Mode;
}

const QuizChecker = ({ onPressSubmit, isQuizComplete, mode }: CheckerProps) => {
  if (!isQuizComplete) {
    return null;
  }
  switch (mode) {
    case Mode.Checking:
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    case Mode.Failed:
      return (
        <View>
          <Text>Fail!</Text>
        </View>
      );
    default:
      return <Button onPress={onPressSubmit} title="Verify" size="default" />;
  }
};

export const MnemonicQuiz = React.memo(MnemonicQuizComponent);
