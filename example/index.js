import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';

import App from './App';

const warningsToIgnore = [
  'Require cycle', // TODO: maybe fix require cycles and remove this lol
];

LogBox.ignoreLogs(warningsToIgnore);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
