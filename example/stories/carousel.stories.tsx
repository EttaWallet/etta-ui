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
  stepInfo: [
    {
      title: 'Manage your bitcoin',
      text: 'Have full control with this self-custody wallet. No one else can access your bitcoin.',
    },
    {
      title: 'Convenient backups with cloud storage',
      text: 'Your recovery phrase will be encrypted and backed up to your cloud provider, only you will be able to access it.',
    },
    {
      title: 'Keep your wallet and bitcoin secure',
      text: 'Enable face detection or set a pin for extra security.',
    },
  ],
  embeddedNavBar: true,
  onFinish: () => 0,
  buttonText: 'Next',
  finalButtonText: 'Continue',
};
