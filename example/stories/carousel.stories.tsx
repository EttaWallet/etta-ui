// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Carousel } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Carousel',
  component: Carousel,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const OnboardingExample = Template.bind({});

OnboardingExample.args = {
  data: [
    {
      key: '1',
      title: 'Cool package',
      description: 'This is a cool package',
      backgroundColor: '#e879f2',
      image: require('./..'),
      titleStyle: {
        color: 'white',
      },
      descriptionStyle: {
        color: 'white',
      },
    },
  ],
  paginationConfig: { dotSize: 12 },
  buttonsConfig: { useBottomButtons: true },
};
