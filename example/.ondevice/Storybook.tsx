import React from 'react';
import { getStorybookUI } from '@storybook/react-native';
import './doctools';
import './storybook.requires';
import * as Font from 'expo-font';

const StorybookUI = getStorybookUI({});

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
