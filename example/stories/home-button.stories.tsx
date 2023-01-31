// stories/chip.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { HomeButton } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView, View } from 'react-native';
import { iconNameToGlyphMap } from '../../src/components/icon/icon.vars';

const icons = Object.keys(iconNameToGlyphMap);

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Home Buttons',
  component: HomeButton,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
  argTypes: {
    icon: {
      options: icons,
      control: { type: 'select' },
    },
    onPress: { action: 'pressed button' },
  },
} as ComponentMeta<typeof HomeButton>;

const Template: ComponentStory<typeof HomeButton> = (args) => (
  <HomeButton {...args}>Send</HomeButton>
);

export const Default = Template.bind({});

Default.parameters = { controls: { exclude: ['icon'] } };

Default.args = {
  icon: 'icon-arrow-up',
};

const GroupTemplate: ComponentStory<typeof HomeButton> = () => (
  <View style={{ flexDirection: 'row' }}>
    <HomeButton style={{ marginHorizontal: 8 }} icon="icon-arrow-up">
      Send
    </HomeButton>
    <HomeButton style={{ marginHorizontal: 8 }} icon="icon-qr-code">
      Scan
    </HomeButton>
    <HomeButton style={{ marginHorizontal: 8 }} icon="icon-arrow-down">
      Receive
    </HomeButton>
  </View>
);

export const ButtonGroup = GroupTemplate.bind({});
