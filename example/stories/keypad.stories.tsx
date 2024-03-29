// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { KeyPad } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import { action } from '@storybook/addon-actions';
import * as Haptics from 'expo-haptics';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Keypad',
  component: KeyPad,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
} as ComponentMeta<typeof KeyPad>;

const Template: ComponentStory<typeof KeyPad> = (args) => <KeyPad {...args} />;

export const NumericKeypad = Template.bind({});

const onPressDigit = () => {
  action('clicked-digit');
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
};

NumericKeypad.args = {
  onDigitPress: onPressDigit,
};
