// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';
import { action } from '@storybook/addon-actions';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Modals',
  component: Modal,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
  argTypes: {
    title: {
      control: { type: 'string' },
    },
    message: {
      control: { type: 'string' },
    },
    actionButton: {
      title: {
        control: { type: 'string' },
      },
    },
    cancelButton: {
      title: {
        control: { type: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const TwoButtonModal = Template.bind({});

TwoButtonModal.args = {
  title: 'You have a lightning invoice on your clipboard',
  message: 'Would you like to use this invoice for a transaction?',
  actionButton: {
    title: 'Okay',
    onPress: action('clicked-action-button'),
  },
  cancelButton: {
    title: 'Cancel',
    onPress: action('clicked-cancel-button'),
  },
};

export const OneButtonModal = Template.bind({});

OneButtonModal.args = {
  title: 'Incoming on-chain transaction',
  message:
    'To save on the currently high fees, these funds will become available in about 2-3 hours.',
  actionButton: {
    title: 'Okay',
    onPress: action('clicked-action-button'),
  },
};
