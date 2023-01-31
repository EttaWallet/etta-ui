import { createThemedStyleSheet } from '../../theme';
import { TypographyPresets } from 'etta-ui';

export const getHomeButtonStyle = createThemedStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.homeButton.backgroundColor,
    borderColor: theme.homeButton.borderColor,
    borderWidth: 1,
    paddingHorizontal: 23,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: 100,
  },
  text: {
    paddingTop: 10,
    ...TypographyPresets.Body5,
    color: theme.homeButton.textColor,
  },
  icon: {
    paddingTop: 10,
    fontSize: 25,
    color: theme.homeButton.textColor,
  },
}));
