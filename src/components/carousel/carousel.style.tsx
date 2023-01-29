import { createThemedStyleSheet } from '../../theme';
import { TypographyPresets } from 'etta-ui';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const getCarouselStyles = createThemedStyleSheet(() => ({
  root: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
  },
  heading: {
    marginTop: 24,
    ...TypographyPresets.Header2,
    textAlign: 'center',
  },
  headingTop: {
    ...TypographyPresets.Header2,
    marginTop: 26,
    alignSelf: 'flex-start',
  },
  bodyText: {
    ...TypographyPresets.Body3,
    textAlign: 'center',
    paddingTop: 16,
    marginBottom: 24,
  },
  bodyImage: {
    alignSelf: 'center',
    marginBottom: 24,
  },
  swipedContent: {
    width: deviceWidth - 2 * 38,
    margin: 16,
  },
  swipedContentInner: {
    flex: 1,
    justifyContent: 'center',
  },
  top: {
    paddingLeft: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    width: '100%',
  },
  pagination: {
    paddingBottom: 16,
  },
}));
