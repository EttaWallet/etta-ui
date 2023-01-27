import { createThemedStyleSheet } from '../../theme';
import { TypographyPresets } from 'etta-ui';

export const getSettingsItemStyles = createThemedStyleSheet((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  left: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    ...TypographyPresets.Body3,
    color: theme.settingsItem.titleColor,
  },
  value: {
    ...TypographyPresets.Body4,
    color: theme.settingsItem.valueColor,
    marginRight: 8,
  },
  valueActionable: {
    ...TypographyPresets.Body4,
    color: theme.settingsItem.valueActionableColor,
    marginRight: 8,
  },
  details: {
    ...TypographyPresets.Body4,
    color: theme.settingsItem.detailsColor,
    paddingRight: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
