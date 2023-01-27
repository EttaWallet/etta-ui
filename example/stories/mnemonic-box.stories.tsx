// stories/input.stories.tsx
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  MnemonicBox,
  RecoveryPhraseContainerMode,
  RecoveryPhraseType,
} from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 32,
};

export default {
  title: 'Recovery Phrase',
  component: MnemonicBox,
  parameters: {
    notes: `
     # Here I can add some markdown
     
     Put a full new line between each element.
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
    includeHeader: {
      control: { type: 'boolean' },
    },
    header: {
      control: { type: 'text' },
    },
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
  includeHeader: true,
  header: 'Type your recovery phrase',
  value: mnemonic,
  mode: RecoveryPhraseContainerMode.INPUT,
  type: RecoveryPhraseType.BACKUP_KEY,
};

InputContainer.parameters = {
  controls: { exclude: ['mode', 'type'] },
};

export const ReadOnlyContainer = Template.bind({});

ReadOnlyContainer.args = {
  includeHeader: true,
  header: 'Your recovery phrase',
  value: mnemonic,
  mode: RecoveryPhraseContainerMode.READONLY,
  type: RecoveryPhraseType.BACKUP_KEY,
};

ReadOnlyContainer.parameters = {
  controls: { exclude: ['mode', 'type'] },
};
