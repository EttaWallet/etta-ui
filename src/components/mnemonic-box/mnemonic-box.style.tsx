import { createThemedStyleSheet } from '../../theme';
import { TypographyPresets } from 'etta-ui';

export const getMnemonicBoxStyles = createThemedStyleSheet((theme) => ({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  writeDownKeyContainer: {
    flexDirection: 'column',
  },
  writeDownKey: {
    ...TypographyPresets.Header4,
    marginBottom: 16,
  },
  phraseContainer: {
    marginTop: 8,
    backgroundColor: theme.mnemonicBox.containerBackground,
    borderWidth: 1,
    borderColor: theme.mnemonicBox.containerBorderColor,
    borderRadius: 4,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  phraseText: {
    ...TypographyPresets.Body3,
    lineHeight: 18,
  },
  phraseWrapper: {
    flexDirection: 'row',
    paddingBottom: 6,
  },
  phraseIndex: {
    ...TypographyPresets.Body3,
    lineHeight: 18,
    opacity: 0.25,
    paddingRight: 10, // distance from index + 1 to text
  },
  phraseInputText: {
    ...TypographyPresets.Body2,
    minHeight: 125,
    padding: 14,
    paddingTop: 16,
    textAlignVertical: 'top',
  },
}));
