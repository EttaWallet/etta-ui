// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const customStoryStyle = {
  marginVertical: 16,
  marginHorizontal: 20,
};

export default {
  title: 'Text Area',
  component: TextArea,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
  argTypes: {
    comment: {
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
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea
    style={customStoryStyle}
    {...args}
    placeholder="Random alphanumerical text goes here"
  />
);

export const DefaultTextArea = Template.bind({});

DefaultTextArea.args = {
  placeholder: 'Default',
  editable: true,
};
