// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputField } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Inputs',
  component: InputField,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
    editable: {
      control: { type: 'boolean', default: false },
    },
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const DefaultInput = Template.bind({});

DefaultInput.args = {
  value: 'Default',
};

export const InputWithPlaceholder = Template.bind({});

InputWithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const InputWithError = Template.bind({});

InputWithError.args = {
  value: 'Placeholder',
  error: true,
};

export const DisabledInput = Template.bind({});

DisabledInput.args = {
  value: 'Disabled',
  editable: false,
};
