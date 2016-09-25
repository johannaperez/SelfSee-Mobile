const MK = require('react-native-material-kit');
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';
import {Takepic} from './ios/components/camera';
const {
  MKButton,
  MKColor,
} = MK;
const Fab = MKButton.coloredFab()
  .withBackgroundColor(MKColor.Yellow)
  .build();

class SelfSee extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View>
          <Fab onPress={() => {
                console.warn('hi, raised button!');
                }}>
            <Text style={styles.Buttontext}>
                PRESS BUTTON!!
            </Text>
          </Fab>
        </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Buttonstyle:{
     justifyContent: 'center',
  },
  Buttontext:{
    textAlign: 'center',
    color: '#000000',
    fontSize: 10,
  }
});

AppRegistry.registerComponent('SelfSee', () => SelfSee);