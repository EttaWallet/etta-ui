// stories/button.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import { iconNameToGlyphMap } from '../../src/components/icon/icon.vars';

const icons = Object.keys(iconNameToGlyphMap);

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Button',
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
      options: ['default', 'large', 'small'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      options: icons,
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
    onPress: { action: 'pressed' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});

NormalButton.args = {
  title: 'I am a button',
  appearance: 'filled',
  size: 'default',
};

NormalButton.parameters = { controls: { exclude: ['icon', 'iconPosition'] } };

export const ButtonWithIcon = Template.bind({});

ButtonWithIcon.args = {
  title: 'Button with icon',
  appearance: 'filled',
  size: 'default',
  icon: 'icon-arrow-up',
  iconPosition: 'left',
};
