import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'etta-ui';
import { getHeaderStyle } from './nav-header.style';

interface HeaderProps {
  left?: JSX.Element;
  right?: JSX.Element;
  title?: React.ReactElement | string;
}

const NavHeaderComponent = ({ left, right, title }: HeaderProps) => {
  const theme = useTheme();
  const styles = getHeaderStyle(theme);

  const titleComponent =
    typeof title === 'string' ? (
      <Text style={styles.title}>{title}</Text>
    ) : (
      title
    );
  return (
    <View style={styles.container}>
      {title && <View style={styles.titleContainer}>{titleComponent}</View>}
      {left && <View style={styles.buttonContainer}>{left}</View>}
      {right && <View style={styles.buttonContainer}>{right}</View>}
    </View>
  );
};

export const NavHeader = React.memo(NavHeaderComponent);
