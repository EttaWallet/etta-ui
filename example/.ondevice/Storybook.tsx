import React from 'react';
import {
  getStorybookUI,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import './doctools';
import './storybook.requires';
import * as Font from 'expo-font';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemes } from '../theme-switcher';
import type { ThemeOption } from '../theme-switcher/constants';
import { DARK_THEME, LIGHT_THEME } from 'etta-ui';

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(withThemes);

addParameters({
  themes: [
    {
      theme: LIGHT_THEME,
      value: 'light',
      name: 'Light',
    },
    {
      theme: DARK_THEME,
      value: 'dark',
      name: 'Dark',
    },
  ] as ThemeOption[],
});

const StorybookUI = getStorybookUI({
  shouldPersistSelection: true,
  tabOpen: 0,
});

let customFonts = {
  'Inter-SemiBold': require('../../fonts/Inter-SemiBold.ttf'),
  'Inter-Regular': require('../../fonts/Inter-Regular.ttf'),
  'Bitcoin': require('../../fonts/Bitcoin.ttf'),
};

class StorybookUIRoot extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return <StorybookUI />;
  }
}

export default StorybookUIRoot;
