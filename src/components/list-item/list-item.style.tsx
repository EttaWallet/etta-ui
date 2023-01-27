import { createThemedStyleSheet } from '../../theme';

export const getListItemStyles = createThemedStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.listItem.background,
  },
  innerView: {
    borderBottomWidth: 1,
    borderBottomColor: theme.listItem.bottomBorderColor,
    marginLeft: 16,
  },
}));
