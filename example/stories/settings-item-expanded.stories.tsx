import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SettingsExpandedItem } from 'etta-ui';
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
  title: 'Settings/ExpandedItem',
  component: SettingsExpandedItem,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    details: {
      control: { type: 'text' },
    },
    onPress: { action: 'pressed' },
  },
} as ComponentMeta<typeof SettingsExpandedItem>;

const Template: ComponentStory<typeof SettingsExpandedItem> = (args) => {
  return <SettingsExpandedItem {...args} />;
};
export const Example = Template.bind({});

Example.args = {
  title: 'On-the-fly channel creation',
  details:
    'Channel creation fees apply when you receive a payment over lightning and a new channel needs to be created.',
  onPress: action('clicked-setting-item'),
};
