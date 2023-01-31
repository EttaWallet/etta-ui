import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Icon, useTheme, ValueOf } from 'etta-ui';
import React from 'react';

import { getHomeButtonStyle } from './home-button.style';

export interface HomeButtonProps extends TouchableOpacityProps {
  children: string;
  icon: ValueOf<typeof Icon.names>;
}

function HomeButtonComponent(props: HomeButtonProps) {
  const { icon, children, onPress, ...viewProps } = props;
  const theme = useTheme();
  const styles = getHomeButtonStyle(theme);

  return (
    <TouchableOpacity
      {...viewProps}
      onPress={onPress}
      activeOpacity={onPress ? 0.5 : 1}
    >
      <View style={styles.container}>
        <Icon name={icon} style={styles.icon} />
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

export const HomeButton = React.memo(HomeButtonComponent);
