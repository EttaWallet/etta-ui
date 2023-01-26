import * as React from 'react';
import { Text, View } from 'react-native';
import { Icon, Switch, ListItem, useTheme } from 'etta-ui';
import { getSettingsItemStyles } from './settings-item.style';

interface WrapperProps {
  testID?: string;
  onPress?: () => void;
  children: React.ReactNode;
}

function Wrapper({ testID, onPress, children }: WrapperProps) {
  return (
    <ListItem testID={testID} onPress={onPress}>
      {children}
    </ListItem>
  );
}

function Title({ value }: { value: string }) {
  const theme = useTheme();
  const styles = getSettingsItemStyles(theme);
  return (
    <View style={[styles.left]}>
      {<Text style={styles.title}>{value}</Text>}
    </View>
  );
}

type BaseProps = {
  title: string;
} & Omit<WrapperProps, 'children'>;

type SettingsItemTextValueProps = {
  value?: string;
  showChevron?: boolean;
  isValueActionable?: boolean;
} & BaseProps;

const SettingsItemTextValueComponent = ({
  testID,
  title,
  value,
  showChevron,
  onPress,
  isValueActionable,
}: SettingsItemTextValueProps) => {
  const theme = useTheme();
  const styles = getSettingsItemStyles(theme);
  return (
    <Wrapper testID={testID} onPress={onPress}>
      <View style={styles.container}>
        <Title value={title} />
        <View style={styles.right}>
          {value && (
            <>
              <Text
                testID={testID ? `${testID}/value` : `${title}/value`}
                style={
                  isValueActionable ? styles.valueActionable : styles.value
                }
              >
                {value}
              </Text>
              <Icon
                name="icon-caret-right"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontSize: 20,
                  color: isValueActionable ? '#27AE60' : undefined,
                }}
              />
              <Icon
                name="icon-caret-right"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontSize: 20,
                  color: isValueActionable ? '#27AE60' : undefined,
                }}
              />
            </>
          )}
          {showChevron && (
            <Icon
              name="icon-caret-right"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 20,
                color: isValueActionable ? '#27AE60' : undefined,
              }}
            />
          )}
        </View>
      </View>
    </Wrapper>
  );
};

type SettingsItemSwitchProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  details?: string;
} & Omit<BaseProps, 'onPress'>;

const SettingsItemSwitchComponent = ({
  testID,
  title,
  onValueChange,
  value,
  details,
}: SettingsItemSwitchProps) => {
  const theme = useTheme();
  const styles = getSettingsItemStyles(theme);
  return (
    <Wrapper>
      <View style={styles.container}>
        <Title value={title} />
        <Switch testID={testID} value={value} onValueChange={onValueChange} />
      </View>
      {details && (
        <View>
          <Text style={styles.details}>{details}</Text>
        </View>
      )}
    </Wrapper>
  );
};

type SettingsExpandedItemProps = {
  details?: string;
} & BaseProps;

const SettingsExpandedItemComponent = ({
  testID,
  title,
  details,
  onPress,
}: SettingsExpandedItemProps) => {
  const theme = useTheme();
  const styles = getSettingsItemStyles(theme);
  return (
    <Wrapper testID={testID} onPress={onPress}>
      <View style={styles.container}>
        <Title value={title} />
      </View>
      {details && (
        <View>
          <Text style={styles.details}>{details}</Text>
        </View>
      )}
    </Wrapper>
  );
};

export const SettingsItemTextValue = React.memo(SettingsItemTextValueComponent);
export const SettingsItemSwitch = React.memo(SettingsItemSwitchComponent);
export const SettingsExpandedItem = React.memo(SettingsExpandedItemComponent);
