import React, { useEffect, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  ScrollView,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import type { ViewProps } from 'react-native';
import { Chip, Button, Pagination, useTheme, Icon, ValueOf } from 'etta-ui';
import type { ButtonProps } from 'etta-ui';
import { getCarouselStyles } from './carousel.style';

const deviceWidth = Dimensions.get('window').width;

interface CarouselStepProps {
  icon?: ValueOf<typeof Icon.names>;
  iconBg?: string;
  title: string;
  text?: string;
  valueProposition?: string;
  variant?: 'old' | 'new';
}

export type Props = ViewProps & {
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
              <View style={styles.swipedContentInner}>
                {step.icon && (
                  <View
                    style={[
                      styles.iconContainer,
                      { backgroundColor: step.iconBg },
                    ]}
                  >
                    <Icon name={step.icon} style={styles.bodyIcon} />
                  </View>
                )}
                <Text style={styles.heading}>{step.title}</Text>
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
          size="block"
        />
      </View>
    </SafeAreaView>
  );
};

export const Carousel = React.memo(CarouselComponent);
