// stories/Button.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
  argTypes: {
    appearance: {
      options: ['filled', 'outline', 'transparent'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'small', 'block'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'text' },
    },
    iconPosition: {
      options: ['left', 'right', 'side'],
      control: { type: 'radio' },
    },
    onPress: { action: 'pressed' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonDemo = Template.bind({});

ButtonDemo.args = {
  title: 'I am a button',
  appearance: 'filled',
  size: 'large',
  icon: 'icon-arrow-up',
  iconPosition: 'left',
};
