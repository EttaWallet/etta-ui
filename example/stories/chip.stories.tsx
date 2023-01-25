// stories/chip.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from 'etta-ui';
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
  title: 'Chips',
  component: Chip,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
  argTypes: {
    selected: {
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
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args}>Label</Chip>
);

export const DefaultChip = Template.bind({});

DefaultChip.args = {
  selected: false,
};

DefaultChip.parameters = { controls: { exclude: ['icon', 'iconPosition'] } };

export const ChipWithIcon = Template.bind({});

ChipWithIcon.args = {
  selected: true,
  icon: 'icon-bell',
  iconPosition: Chip.iconPositions.left,
};
