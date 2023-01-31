import { createThemedStyleSheet } from '../../theme';
import { TypographyPresets } from 'etta-ui';
import { Platform, Dimensions } from 'react-native';

export const getHeaderStyle = createThemedStyleSheet(() => ({
  container: {
    height: Platform.OS === 'ios' ? 44 : 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
  },
  title: {
    ...TypographyPresets.Header5,
    maxWidth: Dimensions.get('window').width * 0.6,
  },
}));
