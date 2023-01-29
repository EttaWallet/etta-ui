import React from 'react';
import { View, ViewStyle, Text, Image } from 'react-native';
import type { CarouselData } from './types';
import { useTheme } from 'etta-ui';
import { getCarouselStyles } from './carousel.style';

type CarouselItemProps = {
  data: CarouselData;
  style?: ViewStyle;
};

const DefaultCarouselItem = ({ data, style }: CarouselItemProps) => {
  const imgPosition = data.imagePosition || 'center';

  const theme = useTheme();
  const styles = getCarouselStyles(theme);

  const renderImage = () => {
    if (!data?.image) {
      return;
    }

    return (
      <View>
        <Image
          source={data.image}
          style={[
            styles.banner,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              marginBottom: imgPosition === 'bottom' ? 0 : 10,
            },
            data.imageStyle,
          ]}
        />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: data?.backgroundColor,
        },
        data.contentStyle,
      ]}
    >
      {imgPosition === 'top' && renderImage()}
      <View>
        <Text style={[styles.title, data.titleStyle]}>{data.title}</Text>
      </View>
      {imgPosition === 'center' && renderImage()}
      <View>
        <Text
          style={[
            styles.description,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              marginBottom: imgPosition === 'bottom' ? 10 : 0,
            },
            data.descriptionStyle,
          ]}
        >
          {data.description}
        </Text>
      </View>
      {imgPosition === 'bottom' && renderImage()}
    </View>
  );
};
export default DefaultCarouselItem;
