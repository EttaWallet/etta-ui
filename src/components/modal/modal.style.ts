import { TypographyPresets } from 'etta-ui';

import { createThemedStyleSheet } from '../../theme';

export const getModalStyles = createThemedStyleSheet((theme) => ({
  container: {
    padding: 24,
    backgroundColor: theme.modal.background,
    width: '100%',
    maxWidth: 330,
    alignItems: 'center',
    borderRadius: 16,
  },
  title: {
    ...TypographyPresets.Header4,
    color: theme.modal.textTitle,
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    ...TypographyPresets.Body5,
    color: theme.modal.textMessage,
    marginBottom: 8,
    textAlign: 'center',
  },
  button: {
    marginHorizontal: 5,
    marginTop: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
