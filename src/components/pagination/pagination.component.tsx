import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'etta-ui';
import React from 'react';
import { getContainerStyle, getPageItemStyle } from './pagination.style';

export interface PaginationProps extends ViewProps {
  count: number;
  selectedIndex: number;
}

const PaginationComponent = React.forwardRef<View, PaginationProps>(
  (props, ref) => {
    const theme = useTheme();
    const { count, selectedIndex, style, ...viewProps } = props;
    const containerStyle = getContainerStyle({ theme });
    return (
      <View
        ref={ref}
        style={StyleSheet.compose(containerStyle, style)}
        {...viewProps}
      >
        {new Array(count).fill(0).map((_, index) => (
          <View
            key={index}
            style={getPageItemStyle({
              theme,
              isSelected: index === selectedIndex,
              isFirst: index === 0,
            })}
          />
        ))}
      </View>
    );
  }
);

export const Pagination = React.memo(PaginationComponent);
