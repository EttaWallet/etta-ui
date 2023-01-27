// stories/input.stories.tsx
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MnemonicBox, RecoveryPhraseContainerMode } from 'etta-ui';
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
  title: 'Recovery Phrase',
  component: MnemonicBox,
  parameters: {
    notes: `
     ### Mnemonic Box
     
     A component to show or input mnemonic/seed.
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
} as ComponentMeta<typeof MnemonicBox>;

const mnemonic =
  'yam flower delight seed cat note gritty pirate vault bean time loud';

const Template: ComponentStory<typeof MnemonicBox> = (args) => {
  return <MnemonicBox {...args} />;
};

export const InputContainer = Template.bind({});

InputContainer.args = {
  value: mnemonic,
  mode: RecoveryPhraseContainerMode.INPUT,
};

InputContainer.parameters = {
  controls: { exclude: ['mode'] },
};

export const ReadOnlyContainer = Template.bind({});

ReadOnlyContainer.args = {
  value: mnemonic,
  mode: RecoveryPhraseContainerMode.READONLY,
};

ReadOnlyContainer.parameters = {
  controls: { exclude: ['mode'] },
};
