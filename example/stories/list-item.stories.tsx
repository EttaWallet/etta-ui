// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListItem } from 'etta-ui';
import type { ViewStyle } from 'react-native';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { action } from '@storybook/addon-actions';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  optionTitle: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
  },
  optionSubtitle: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '400',
    color: '#777777',
  },
});

export default {
  title: 'ListItem',
  component: ListItem,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args}>
    <Text style={styles.optionTitle}>Daily spending limit</Text>
    <Text style={styles.optionSubtitle}>
      The total amount that can be spent per day.
    </Text>
  </ListItem>
);
export const Example = Template.bind({});

Example.args = {
  onPress: action('clicked-list-item'),
};
