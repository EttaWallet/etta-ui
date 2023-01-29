import React, { useEffect, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  ScrollView,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { Chip, Button, Pagination, useTheme, Icon, ValueOf } from 'etta-ui';
import type { ButtonProps } from 'etta-ui';
import { getCarouselStyles } from './carousel.style';

const deviceWidth = Dimensions.get('window').width;

interface CarouselStepProps {
  icon?: ValueOf<typeof Icon.names>;
  title: string;
  // If set to true, title is displayed at the top
  isTopTitle?: boolean;
  text?: string;
  valueProposition?: string;
  variant?: 'old' | 'new';
}

export type Props = NativeSafeAreaViewProps & {
  embeddedNavBar: boolean;
  stepInfo: CarouselStepProps[];
  buttonType?: ButtonProps;
  buttonText: string;
  finalButtonType?: ButtonProps;
  finalButtonText: string;
  onFinish: () => void;
  onCancel: () => void;
};

const CarouselComponent = (props: Props) => {
  const theme = useTheme();
  const styles = getCarouselStyles(theme);

  const {
    style,
    embeddedNavBar,
    stepInfo,
    buttonText,
    finalButtonText,
    onFinish,
    onCancel,
    ...passThroughProps
  } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  // This variable tracks the last scrolled to carousel screen, so that impression
  // events are not dispatched twice for the same carousel screen
  const lastViewedIndex = useRef(-1);
  // Scroll View Ref for button clicks
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: { nativeEvent: NativeScrollEvent }) => {
    const nextIndex = Math.round(
      event.nativeEvent.contentOffset.x / deviceWidth
    );
    if (nextIndex === currentIndex) {
      return;
    }

    setCurrentIndex(
      Math.round(event.nativeEvent.contentOffset.x / deviceWidth)
    );
  };

  useEffect(() => {
    if (stepInfo.length > 0 && lastViewedIndex.current < currentIndex) {
      lastViewedIndex.current = currentIndex;
    }
  }, [currentIndex, stepInfo]);

  if (!stepInfo.length) {
    // No Steps, no slider
    return null;
  }

  const goBack = () => {
    if (currentIndex === 0) {
      onCancel; // do something e.g navigate backwards
    } else {
      scrollViewRef.current?.scrollTo({
        x: deviceWidth * (currentIndex - 1),
        animated: true,
      });
    }
  };

  const nextStep = () => {
    // If we are on the last step, call the onFinish function otherwise scroll to the next step
    currentIndex === stepInfo.length - 1
      ? onFinish()
      : scrollViewRef.current?.scrollTo({
          x: deviceWidth * (currentIndex + 1),
          animated: true,
        });
  };

  const renderEmbeddedNavBar = () => {
    return (
      <View style={styles.top}>
        <Chip
          onPress={goBack}
          icon={currentIndex === 0 ? 'icon-cross' : 'icon-caret-left'}
        >
          {currentIndex === 0 ? 'Close' : 'Previous'}
        </Chip>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.root, style]} {...passThroughProps}>
      {embeddedNavBar && renderEmbeddedNavBar()}
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
        >
          {stepInfo.map((step: CarouselStepProps, i: number) => (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
              style={styles.swipedContent}
              key={i}
            >
              {step.isTopTitle && (
                <Text style={styles.headingTop}>{step.title}</Text>
              )}
              <View style={styles.swipedContentInner}>
                {step.icon && <Icon name="icon-address-book" />}
                {!step.isTopTitle && (
                  <Text style={styles.heading}>{step.title}</Text>
                )}
                {!!step.text && (
                  <Text style={styles.bodyText}>{step.text}</Text>
                )}
              </View>
            </ScrollView>
          ))}
        </ScrollView>
        <Pagination
          style={styles.pagination}
          count={stepInfo.length}
          selectedIndex={currentIndex}
        />
        <Button
          onPress={nextStep}
          title={
            currentIndex === stepInfo.length - 1 ? finalButtonText : buttonText
          }
          appearance="filled"
        />
      </View>
    </SafeAreaView>
  );
};

export const Carousel = React.memo(CarouselComponent);
