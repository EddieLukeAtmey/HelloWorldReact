/**
 * @format
 */

import {AppRegistry} from 'react-native';

// import App from './App';
// import HelloWorldVC from './Modules/HelloWorld'
// import HelloWorldVC from './Modules/Blink'

import HelloMaps from './src/screens/HelloMaps'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloMaps);
