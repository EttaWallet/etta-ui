import { createThemedStyleSheet } from '../../theme';
import { TypographyPresets } from 'etta-ui';

export const getMnemonicQuizStyles = createThemedStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: theme.mnemonicQuiz.containerBackground,
  },
  scrollContainer: {
    paddingTop: 24,
  },
  bottomHalf: { flex: 1, justifyContent: 'center' },
  bodyText: {
    marginTop: 20,
    ...TypographyPresets.Body3,
    color: theme.mnemonicQuiz.textColor,
    textAlign: 'center',
  },
  bodyTextBold: {
    ...TypographyPresets.Header5,
    textAlign: 'center',
    marginTop: 25,
  },
  chosenWordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 300,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: theme.mnemonicQuiz.chosenWordsBackground,
    borderWidth: 1,
    borderColor: theme.mnemonicQuiz.chosenWordsBorder,
    borderRadius: 4,
    padding: 16,
  },
  chosenWordWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    minWidth: 55,
    borderWidth: 1,
    borderColor: theme.mnemonicQuiz.chosenWordsBorder,
    borderRadius: 5,
  },
  chosenWordWrapperFilled: {
    backgroundColor: theme.mnemonicQuiz.chosenWordsFilledBackground,
  },
  chosenWord: {
    ...TypographyPresets.Body3,
    textAlign: 'center',
    lineHeight: undefined,
    color: theme.mnemonicQuiz.chosenWordColor,
  },
  chosenWordFilled: {
    ...TypographyPresets.Body4,
    textAlign: 'center',
    lineHeight: undefined,
    color: theme.mnemonicQuiz.chosenWordFilledColor,
  },
  mnemonicButtonsContainer: {
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  mnemonicWordButtonOutterRim: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: theme.mnemonicQuiz.containerBackground,
    backgroundColor: theme.mnemonicQuiz.chosenWordsBorder,
    overflow: 'hidden',
    marginVertical: 4,
    marginHorizontal: 4,
  },
  mnemonicWordButton: {
    borderRadius: 3,
    minWidth: 98,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  mnemonicWordButtonText: {
    textAlign: 'center',
    color: theme.mnemonicQuiz.textColor,
    fontSize: 18,
  },
  backWord: {
    paddingRight: 24,
    paddingLeft: 16,
    paddingVertical: 4,
  },
  resetButton: { alignItems: 'center', padding: 24, marginTop: 8 },
}));
