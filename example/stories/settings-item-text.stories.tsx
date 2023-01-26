import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SettingsItemTextValue } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import { action } from '@storybook/addon-actions';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Settings/TextValue',
  component: SettingsItemTextValue,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
} as ComponentMeta<typeof SettingsItemTextValue>;

const Template: ComponentStory<typeof SettingsItemTextValue> = (args) => {
  return <SettingsItemTextValue {...args} />;
};
export const Example = Template.bind({});

Example.args = {
  title: 'Language',
  value: 'Swahili',
  onPress: action('clicked-setting-item'),
};
