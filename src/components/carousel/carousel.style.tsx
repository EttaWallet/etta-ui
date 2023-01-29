import { createThemedStyleSheet } from '../../theme';

export const getCarouselStyles = createThemedStyleSheet((theme) => ({
  // carousel styles
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    borderRadius: 50,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
  },
  paginationContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 40,
  },
  bottomContent: {
    position: 'absolute',
    width: '100%',
  },
  button: {
    padding: 10,
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 3,
  },
  // carousel button styles
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    right: 0,
  },
  buttonItem: {
    padding: 10,
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.carousel.buttonTextColor,
    fontSize: 16,
  },
  // default carouselItem styles
  carouselContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  banner: {
    width: 250,
    height: 250,
  },
  // bottom buttons styles

  bottomButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  bottomButton: {
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  bottomButtonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonText: {
    color: theme.carousel.bottomButtonTextColor,
    fontSize: 18,
  },
}));
