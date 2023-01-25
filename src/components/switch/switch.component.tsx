import * as React from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native';
import { useTheme } from 'etta-ui';

const SwitchComponent = (props: SwitchProps) => {
  const theme = useTheme();
  return (
    <RNSwitch
      {...props}
      trackColor={theme.switch.trackColor}
      thumbColor={theme.switch.thumbColor}
      ios_backgroundColor={theme.switch.ios_backgroundColor}
    />
  );
};

export const Switch = React.memo(SwitchComponent);
