'use strict';

import BaseComponent from 'Base/BaseComponent'
import { DefaultStyle as style } from 'Style/DefaultStyle'
import React from 'react'
import {
  AppRegistry,
  Image,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  View,
} from 'react-native'

export default class HelloWorldVC extends BaseComponent {

  render() {

    return (
    	<HelloWorld1/>
//       <View
//         style={{
//           alignItems: "center",
//           backgroundColor: "rgba(74,226,109,1)",
//           width: 250,
//           height: 250
//         }}>
//         <Clone depth='0'/>
//       </View>
);
  }
}

class HelloWorld1 extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      showHelloWorld: false
    };

    setInterval( () => {
      this.setState( previousState => (
        { showHelloWorld: !previousState.showHelloWorld }
      ))

      console.log('state: ' + this.state.showHelloWorld)
    }, 1000);
  }

  render() {
    let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };

    return (
      <View style={style.stackView.vCenter10}>
        <Text style={style.text.normal18}>
          { this.state.showHelloWorld ? 'HelloWorld' : null }
        </Text>

        <TouchableOpacity onPress={() => { }} activeOpacity={75 / 100} underlayColor={"rgb(210,210,210)"}>

          <View style={style.stackView.vCenter10}>

            {this.state.showHelloWorld &&
              <Text style={[style.text.normal14, {color: 'red'}]}> Heheee </Text> // https://reactjs.org/docs/conditional-rendering.html
            }
            <Image style={{ width: 300, height: 200 }} resizeMode={"contain"} source={pic}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
