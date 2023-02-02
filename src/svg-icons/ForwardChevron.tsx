import * as React from 'react';
import { Colors } from '../theme';
import Svg, { Path } from 'react-native-svg';

interface Props {
  height?: number;
  color?: string;
}

const ForwardChevron = ({ color, height }: Props) => {
  return (
    <Svg
      height={height}
      width={height && height / 2}
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      testID="ForwardChevron"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.293.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L5.586 7 .293 1.707a1 1 0 0 1 0-1.414Z"
        fill={color}
      />
    </Svg>
  );
};

ForwardChevron.defaultProps = {
  height: 16,
  color: Colors.common.black,
};

export const ForwardChevronIcon = React.memo(ForwardChevron);
