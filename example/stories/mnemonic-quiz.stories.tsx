// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MnemonicQuiz } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 32,
  marginTop: 100,
};

export default {
  title: 'Manual Backup',
  component: MnemonicQuiz,
  parameters: {
    notes: `
     ### Mnemonic Quiz
     
     A component to perform manual seed backup
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
    value: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof MnemonicQuiz>;

const mnemonic =
  'yam flower delight seed cat note gritty pirate vault bean time loud';

const Template: ComponentStory<typeof MnemonicQuiz> = (args) => {
  return <MnemonicQuiz {...args} seed={mnemonic} resetTitle="Reset" />;
};

export const Backup = Template.bind({});
