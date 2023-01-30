import { createThemedStyleSheet } from '../../theme';
import { TypographyPresets } from 'etta-ui';
import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

export const getCarouselStyles = createThemedStyleSheet((theme) => ({
  root: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 24,
  },
  heading: {
    marginTop: 30,
    ...TypographyPresets.Header2,
    textAlign: 'center',
  },
  headingTop: {
    ...TypographyPresets.Header2,
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  bodyText: {
    ...TypographyPresets.Body3,
    textAlign: 'center',
    paddingTop: 16,
    color: theme.carousel.bodyTextColor,
  },
  bodyIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 52,
    color: theme.carousel.bodyIconColor,
  },
  iconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  swipedContent: {
    width: deviceWidth - 2 * 20,
    margin: 20,
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
    paddingBottom: 28,
  },
}));
