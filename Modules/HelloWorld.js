'use strict';

import React, { Component } from 'react';
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

class HelloWorldVC extends Component {
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

class Clone extends Component {
  render() {

    if (this.props.depth > 5) return (
      <Text
        style={styles.normalText}>
        The end
      </Text>
    );

    return (
      <View style= {{
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
      }}>
        <Clone depth={ this.props.depth + 1}/>
      </View>
    );
  }
}

class HelloWorld1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showHelloWorld: false
    };

    console.log('dafuq')
  }

  updateState() {
    this.setState(
      { showHelloWorld: !this.state.showHelloWorld }
    )
  }

  componentDidMount() {
    console.log('this.state.showHelloWorld')
    setInterval( () => {
        this.updateState()

    }, 1000);
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Text style={styles.normalText} isHidden={this.state.showHelloWorld}>
          HelloWorld
        </Text>
            <TouchableOpacity
                onPress={() => {
                }}
                activeOpacity={75 / 100}
                underlayColor={"rgb(210,210,210)"}>
              <View style={styles.container}>
                <Text style={styles.normalText}>
                  Heheee
                </Text>
                <Image
                  style={{
                    width: 300,
                    height: 200,
                  }}
                  resizeMode={"contain"}
                  source={pic}
                />
              </View>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: "center",
        padding: 10
	},

	normalText: {
		fontSize: 14,
	}
});

export default HelloWorldVC;
