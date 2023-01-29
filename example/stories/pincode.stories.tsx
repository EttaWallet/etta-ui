// stories/input.stories.tsx
import React, { useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pincode } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 16,
  marginTop: 100,
};

export default {
  title: 'Pincode',
  component: Pincode,
  parameters: {
    notes: `
     ### Pincode Entry
     
     A component to allow users enter and confirm their PIN at any stage
    `,
  },
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
      control: { type: 'text' },
    },
    pin: {
      control: { type: 'text' },
    },
    onBoardingSetPin: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Pincode>;

const Template: ComponentStory<typeof Pincode> = (args) => {
  const [pin, setPin] = useState('');

  const onChangePinFn = () => {
    setPin(pin);
  };

  const onCompletePinFn = () => {
    return true; // for testing purposes
  };

  return (
    <Pincode
      {...args}
      onChangePin={onChangePinFn}
      onCompletePin={onCompletePinFn}
    />
  );
};

export const NewPin = Template.bind({});

NewPin.args = {
  onBoardingSetPin: true,
  pin: '',
};

export const VerifyPin = Template.bind({});

VerifyPin.args = {
  title: 'Enter your PIN again to confirm',
  onBoardingSetPin: false,
  pin: '',
};

export const Error = Template.bind({});

Error.args = {
  errorText: 'The PINs did not match',
  onBoardingSetPin: false,
};
