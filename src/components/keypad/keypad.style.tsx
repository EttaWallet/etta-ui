import { createThemedStyleSheet } from '../../theme';

export const getKeyPadStyles = createThemedStyleSheet((theme) => ({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  digit: {
    fontSize: 24,
    lineHeight: 27,
    fontWeight: '400',
    width: 60,
    padding: 24,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: theme.keypad.digitColor,
  },
  backspace: {
    color: theme.keypad.backspaceColor,
  },
}));
