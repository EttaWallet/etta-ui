// stories/input.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TypographyPresets, Colors } from 'etta-ui';
import { ScrollView, Text, Dimensions, View } from 'react-native';
import type { TextStyle, ViewStyle } from 'react-native';

const scrollViewWithPaddingStyle: ViewStyle = {
  flexDirection: 'row',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 16,
};

const textStyle: TextStyle = {
  marginBottom: 20,
  color: Colors.orange.base,
};

const width = Dimensions.get('window').width;

export default {
  title: 'Typography',
  component: Text,
  parameters: {
    notes: `
     ### Typography
     
     Preview different typography setups
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
} as ComponentMeta<typeof Text>;

const HeadingTemplate: ComponentStory<typeof Text> = () => {
  return (
    <View style={{ width: width - 2 * 20 }}>
      <Text style={[TypographyPresets.Header1, textStyle]}>Heading 1</Text>
      <Text style={[TypographyPresets.Header2, textStyle]}>Heading 2</Text>
      <Text style={[TypographyPresets.Header3, textStyle]}>Heading 3</Text>
      <Text style={[TypographyPresets.Header4, textStyle]}>Heading 4</Text>
      <Text style={[TypographyPresets.Header5, textStyle]}>Heading 5</Text>
    </View>
  );
};

export const Headings = HeadingTemplate.bind({});

const BodyTemplate: ComponentStory<typeof Text> = () => {
  return (
    <View style={{ width: width - 2 * 20 }}>
      <Text style={[TypographyPresets.Body1, textStyle]}>Text 1</Text>
      <Text style={[TypographyPresets.Body2, textStyle]}>Text 2</Text>
      <Text style={[TypographyPresets.Body3, textStyle]}>Text 3</Text>
      <Text style={[TypographyPresets.Body4, textStyle]}>Text 4</Text>
      <Text style={[TypographyPresets.Body5, textStyle]}>Text 5</Text>
    </View>
  );
};

export const BodyText = BodyTemplate.bind({});
