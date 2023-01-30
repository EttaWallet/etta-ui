// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Carousel } from 'etta-ui';
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
  argTypes: {
    stepInfo: {
      title: { control: 'text' },
      text: { control: 'text' },
      icon: {
        options: icons,
        control: { type: 'select' },
      },
      iconBg: { control: 'string' },
    },
    embeddedNavBar: {
      control: { type: 'boolean' },
    },
    onFinish: { action: 'clicked-continue' },
    onCancel: { action: 'clicked-close' },
  },
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
      icon: 'icon-wallet-2',
      iconBg: '#27AE60',
    },
    {
      title: 'Convenient backups with cloud storage',
      text: 'Your recovery phrase will be encrypted and backed up to your cloud provider, only you will be able to access it.',
      icon: 'icon-cloud',
      iconBg: '#BB6BD9',
    },
    {
      title: 'Keep your wallet and bitcoin secure',
      text: 'Enable face detection or set a pin for extra security.',
      icon: 'icon-safe',
      iconBg: '#2D9CDB',
    },
  ],
  embeddedNavBar: false,
  buttonText: 'Next',
  finalButtonText: 'Continue',
  onFinish: () => 0,
  onCancel: () => 0,
};

export const WithNavBar = Template.bind({});

WithNavBar.args = {
  stepInfo: [
    {
      title: 'Manage your bitcoin',
      text: 'Have full control with this self-custody wallet. No one else can access your bitcoin.',
      icon: 'icon-wallet-2',
      iconBg: '#27AE60',
    },
    {
      title: 'Convenient backups with cloud storage',
      text: 'Your recovery phrase will be encrypted and backed up to your cloud provider, only you will be able to access it.',
      icon: 'icon-cloud',
      iconBg: '#BB6BD9',
    },
    {
      title: 'Keep your wallet and bitcoin secure',
      text: 'Enable face detection or set a pin for extra security.',
      icon: 'icon-safe',
      iconBg: '#2D9CDB',
    },
  ],
  embeddedNavBar: true,
  buttonText: 'Next',
  finalButtonText: 'Continue',
  onFinish: () => 0,
  onCancel: () => 0,
};
