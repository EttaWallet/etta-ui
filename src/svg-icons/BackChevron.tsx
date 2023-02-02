import * as React from 'react';
import { Colors } from '../theme';
import Svg, { Path } from 'react-native-svg';

export interface Props {
  height?: number;
  color?: string;
}

const BackChevron = ({ color = Colors.common.black, height = 16 }: Props) => {
  return (
    <Svg
      height={height}
      width={height && height / 2}
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      testID="BackChevron"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.707 13.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L2.414 7l5.293 5.293a1 1 0 0 1 0 1.414Z"
        fill={color}
      />
    </Svg>
  );
};

export const BackChevronIcon = React.memo(BackChevron);
