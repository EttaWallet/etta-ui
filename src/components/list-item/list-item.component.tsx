import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from 'etta-ui';
import { getListItemStyles } from './list-item.style';

interface Props {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;
}

const ListItemComponent = ({ children, onPress, disabled, testID }: Props) => {
  const theme = useTheme();
  const styles = getListItemStyles(theme);
  return (
    <View style={styles.container}>
      {onPress ? (
        <TouchableOpacity onPress={onPress} disabled={disabled} testID={testID}>
          <View style={styles.innerView}>
            <React.Fragment>{children}</React.Fragment>
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.innerView}>
          <React.Fragment>{children}</React.Fragment>
        </View>
      )}
    </View>
  );
};

export const ListItem = React.memo(ListItemComponent);
