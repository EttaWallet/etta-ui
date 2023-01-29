import { createThemedStyleSheet } from '../../theme';
import { TypographyPresets } from 'etta-ui';

export const getPincodeStyles = createThemedStyleSheet((theme) => ({
  container: {
    flex: 1,
  },
  spacer: {
    flex: 1,
  },
  title: {
    ...TypographyPresets.Header5,
    textAlign: 'center',
    marginBottom: 24,
  },
  error: {
    ...TypographyPresets.Body4,
    color: theme.pincode.errorColor,
    textAlign: 'center',
    marginBottom: 24,
  },
  pincodeContainer: {
    marginBottom: 24,
    paddingHorizontal: '15%',
    alignItems: 'center',
  },
  guidedOnboardingCopy: {
    ...TypographyPresets.Body4,
    textAlign: 'center',
  },
  guidedOnboardingHeader: {
    ...TypographyPresets.Header5,
    textAlign: 'center',
    marginBottom: 24,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginLeft: 24,
    marginRight: 24,
  },
  displayContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  char: {
    ...TypographyPresets.Body2,
  },
  dot: {
    width: 19,
    height: 19,
    borderRadius: 19 / 2,
    borderWidth: 1,
    borderColor: theme.pincode.dotBorderColor,
  },
  dotFilled: {
    backgroundColor: theme.pincode.dotBackgroundColor,
  },
}));
