// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavHeader, Icon } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { ScrollView, Text, View } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 16,
};

export default {
  title: 'Navigation',
  component: NavHeader,
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
  },
} as ComponentMeta<typeof NavHeader>;

const Template: ComponentStory<typeof NavHeader> = (args) => (
  <NavHeader {...args} />
);

const BackButton = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name="icon-caret-left" style={{ paddingRight: 8, fontSize: 20 }} />
      <Text style={{ fontSize: 18, lineHeight: 18, fontWeight: '500' }}>
        Back
      </Text>
    </View>
  );
};
export const GoBack = Template.bind({});

GoBack.args = {
  title: 'Settings',
  left: <BackButton />,
};

export const HomeNav = Template.bind({});

HomeNav.args = {
  left: <Icon name="icon-contacts-2" style={{ fontSize: 30 }} />,
  right: <Icon name="icon-gear-2" style={{ fontSize: 30 }} />,
};
