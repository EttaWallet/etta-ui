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
  marginHorizontal: 20,
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
      title: 'Manage your bitcoin',
      description:
        'Have full control with this self-custody wallet. No one else can access your bitcoin.',
      backgroundColor: '#fff',
      image: require('./..'),
      imagePosition: 'bottom',
      titleStyle: {
        color: '#000000',
      },
      descriptionStyle: {
        color: '#777777',
      },
    },
    {
      key: '2',
      title: 'Convenient backups with cloud storage',
      description:
        'Your recovery phrase will be encrypted and backed up to your cloud provider, only you will be able to access it.',
      backgroundColor: '#fff',
      image: require('./..'),
      titleStyle: {
        color: '#000000',
      },
      descriptionStyle: {
        color: '#777777',
      },
    },
    {
      key: '3',
      title: 'Keep your wallet and bitcoin secure',
      description: 'Enable face detection or set a pin for extra security.',
      backgroundColor: '#fff',
      image: require('./..'),
      titleStyle: {
        color: '#000000',
      },
      descriptionStyle: {
        color: '#777777',
      },
    },
  ],
  paginationConfig: { dotSize: 12, activeColor: '#F7931A', color: '#DEDEDE' },
  buttonsConfig: { useBottomButtons: true },
};
