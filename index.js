/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import HelloWorldVC from './Modules/HelloWorld'
// import HelloWorldVC from './Modules/Blink'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloWorldVC);
