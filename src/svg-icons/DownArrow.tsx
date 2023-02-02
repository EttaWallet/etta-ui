import * as React from 'react';
import { PixelRatio } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '../theme';

interface Props {
  color?: string;
  height?: number;
}

function getSizing(maxSize = 38, baseSize = 16) {
  return baseSize * PixelRatio.getFontScale() < maxSize
    ? baseSize * PixelRatio.getFontScale()
    : maxSize;
}

const DownArrow = ({ height, color = Colors.common.black }: Props) => {
  return (
    <Svg
      width={getSizing(height)}
      height={getSizing(height)}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path d="M3 6l5 5 5-5" stroke={color} />
    </Svg>
  );
};

export const DownArrowIcon = React.memo(DownArrow);
