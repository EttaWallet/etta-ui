// stories/Button.stories.tsx
import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ValueOf } from 'etta-ui';
import { capitalize } from '../utils/capitalize';
import type { ViewStyle } from 'react-native';
import { ScrollView } from 'react-native';

const styleWithMargin: ViewStyle = {
  marginBottom: 16,
  marginRight: 32,
};

const scrollViewWithPaddingStyle: ViewStyle = {
  padding: 16,
  flexDirection: 'row',
  flexWrap: 'wrap',
};

export default {
  title: 'components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ScrollView
        contentContainerStyle={scrollViewWithPaddingStyle}
        children={<Story />}
      />
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Filled: ComponentStory<typeof Button> = () =>
  generateButtonStoryStyle(Button.appearances.filled, Button.sizes.large);

const generateButtonStoryStyle = (
  appearance: ValueOf<typeof Button.appearances>,
  size: ValueOf<typeof Button.sizes>
) => {
  const title = `${capitalize(size)} + ${capitalize(appearance)}`;
  return (
    <>
      <Button
        testID={`${appearance}-default`}
        appearance={appearance}
        style={styleWithMargin}
        title={title}
        size={size}
      />

      <Button
        testID={`${appearance}-default`}
        icon="icon-arrow-left"
        appearance={appearance}
        size={size}
        onPress={action('clicked-text')}
        style={styleWithMargin}
        title={title}
      />
      <Button
        testID={`${appearance}-default`}
        icon="icon-arrow-right"
        size={size}
        iconPosition="right"
        appearance={appearance}
        onPress={action('clicked-text')}
        style={styleWithMargin}
        title={title}
      />
      <Button
        testID={`${appearance}-default`}
        icon="icon-arrow-left"
        size={size}
        iconPosition="side"
        appearance={appearance}
        onPress={action('clicked-text')}
        style={styleWithMargin}
        title={title}
      />
      <Button
        size={size}
        testID={`${appearance}-disabled`}
        appearance={appearance}
        onPress={action('clicked-text')}
        disabled={true}
        style={styleWithMargin}
        title={title}
      />
      <Button
        size={size}
        testID={`${appearance}-disabled`}
        appearance={appearance}
        icon="icon-wallet"
        onPress={action('clicked-text')}
        disabled={true}
        style={styleWithMargin}
        title={title}
      />
    </>
  );
};
