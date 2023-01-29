/****
 * A modified fork of https://github.com/gustavobonassa/react-native-intro-carousel
 *  ****/
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  FlatList,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  View,
  Animated,
} from 'react-native';
import BottomButtons from './bottom-buttons';
import ButtonsScreen, { Button } from './buttons';
import DefaultCarouselItem from './default';
import type { CarouselProps } from './types';
import { useTheme } from 'etta-ui';
import { getCarouselStyles } from './carousel.style';

const viewabilityConfig = { viewAreaCoveragePercentThreshold: 40 };

const defaultDotSize = 15;
const defaultSpacing = 12;

const CarouselComponent = ({
  data,
  paginationConfig,
  renderItem,
  buttonsConfig,
  onFinish,
  onPressSkip,
}: CarouselProps) => {
  const theme = useTheme();
  const styles = getCarouselStyles(theme);
  const {
    dotSize = defaultDotSize,
    bottomOffset = 50,
    animated = true,
    disabled = false,
    dotIncreaseSize = 1.4,
    color = '#ffffff80',
    activeColor = '#fff',
    dotSpacing = defaultSpacing,
    activeDotStyle,
  } = paginationConfig || {};

  const [currentIndex, setCurrentItem] = useState(0);
  const [layoutSize, setLayoutSizes] = useState<{
    width?: number;
    height?: number;
  }>({});
  const flatlistRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const [isNextToDot, setIsNextToDot] = useState(true);

  const disabledButtons = buttonsConfig?.disabled ?? false;
  const useBottomButtons = buttonsConfig?.useBottomButtons ?? false;

  const itemWidth = layoutSize?.width || 0;
  const maxPaginationSize = data.length * dotSize + data.length * dotSpacing;
  const maxSlidersSize = itemWidth * data.length;

  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: isNextToDot ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [isNextToDot, scaleAnimation]);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0 && viewableItems?.[0]?.index >= 0) {
      setCurrentItem(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    { onViewableItemsChanged, viewabilityConfig },
  ]);

  const onChangeSlider = (page: number) => {
    if (!flatlistRef?.current || page < 0 || page >= data.length) {
      return;
    }
    flatlistRef.current.scrollToIndex({
      index: page,
    });
  };

  const handleOnLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
    setLayoutSizes(layout);
  };

  const renderPagination = () => {
    return (
      <View
        style={[
          styles.bottomContent,
          {
            bottom: bottomOffset,
          },
        ]}
      >
        <View style={[styles.paginationContainer]}>
          {!disabledButtons && !useBottomButtons && (
            <ButtonsScreen
              buttonsConfig={buttonsConfig}
              currentIndex={currentIndex}
              maxPaginationSize={maxPaginationSize}
              dataLength={data.length}
              onChangeSlider={(s) => onChangeSlider(s)}
              onFinish={onFinish}
            />
          )}
          <View style={styles.pagination}>
            {animated && (
              <Animated.View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  ...styles.item,
                  backgroundColor: activeColor,
                  position: 'absolute',
                  left: 0,
                  zIndex: 1,
                  width: dotSize,
                  height: dotSize,
                  ...activeDotStyle,
                  transform: [
                    {
                      translateX: scrollX.interpolate({
                        inputRange: [0, maxSlidersSize],
                        outputRange: [0, maxPaginationSize],
                        extrapolate: 'clamp',
                      }),
                    },
                    {
                      scale: scaleAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, dotIncreaseSize],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                }}
              />
            )}
            {data.map((_: any, index: any) => {
              const isActive = !animated && index === currentIndex;
              return (
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    ...styles.item,
                    width: dotSize,
                    height: dotSize,
                    ...(isActive && activeDotStyle),
                    marginLeft: index === 0 ? 0 : dotSpacing,
                    backgroundColor: isActive ? activeColor : color,
                  }}
                  key={index}
                />
              );
            })}
          </View>
        </View>
        {useBottomButtons && (
          <BottomButtons
            onPressNext={() => onChangeSlider(currentIndex + 1)}
            onPressSkip={onPressSkip}
            buttonsConfig={buttonsConfig}
            onFinish={onFinish}
            currentIndex={currentIndex}
            dataLength={data.length}
          />
        )}
      </View>
    );
  };

  const handleEvent = ({ nativeEvent }: NativeSyntheticEvent<any>) => {
    const { x } = nativeEvent?.contentOffset || {};

    const positionItem = x % itemWidth;
    const nextToDot = positionItem < 40 || positionItem > itemWidth - 40;
    if (nextToDot !== isNextToDot) {
      setIsNextToDot(nextToDot);
    }
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.container, { position: 'relative' }]}
      onLayout={handleOnLayout}
    >
      <Animated.FlatList
        ref={flatlistRef}
        initialScrollIndex={0}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
            listener: handleEvent,
          }
        )}
        data={data}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        initialNumToRender={data.length}
        decelerationRate="fast"
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        snapToAlignment="start"
        snapToInterval={itemWidth}
        pagingEnabled
        renderItem={({ item, index }) =>
          renderItem ? (
            <View
              style={{
                ...styles.container,
                width: itemWidth,
              }}
            >
              {renderItem({ item, index }, onChangeSlider)}
            </View>
          ) : (
            <DefaultCarouselItem
              style={{
                ...styles.container,
                width: itemWidth,
              }}
              data={item}
            />
          )
        }
        keyExtractor={(item) => item.key}
      />
      {!disabled && renderPagination()}
      {onPressSkip && !useBottomButtons && !buttonsConfig?.skip?.disabled && (
        <View style={styles.skipButton}>
          {!buttonsConfig?.skip?.renderButton ? (
            <Button
              title={buttonsConfig?.skip?.label || 'Skip'}
              onPress={onPressSkip}
              textStyle={buttonsConfig?.skip?.textStyle}
              buttonStyle={buttonsConfig?.skip?.buttonStyle}
            />
          ) : (
            buttonsConfig?.skip?.renderButton(currentIndex, onChangeSlider)
          )}
        </View>
      )}
    </View>
  );
};

export const Carousel = React.memo(CarouselComponent);
