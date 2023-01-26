// stories/input.stories.tsx
import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SettingsItemSwitch } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Settings/Switch',
  component: SettingsItemSwitch,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
} as ComponentMeta<typeof SettingsItemSwitch>;

const Template: ComponentStory<typeof SettingsItemSwitch> = (args) => {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchToggle = () => {
    setSwitchValue(switchValue);
  };

  return (
    <SettingsItemSwitch
      {...args}
      value={switchValue}
      onValueChange={handleSwitchToggle}
    />
  );
};
export const Example = Template.bind({});

Example.args = {
  title: 'PIN',
  details: 'Create a PIN to access the app and protect your data.',
};
